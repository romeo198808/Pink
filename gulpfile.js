"use strict"

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var svgo = require("gulp-svgo");
var cwebp = require("gulp-cwebp");
var server = require("browser-sync").create();

gulp.task("less", async function() {
 return gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({
        browsers: ["last 5 versions"]
      })
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", async function() {
  server.init({
    server: ".",
    notify: true,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", gulp.series("less")).on("change", server.reload);
  gulp.watch("*.html").on("change", server.reload);
  gulp.watch("imgwork/svg/*.svg", gulp.series("images")).on("change", server.reload);
  gulp.watch("imgwork/jpgpng/*", gulp.series("cwebp")).on("change", server.reload);
});

gulp.task("images", async function() {
  return gulp.src("imgwork/svg/*.svg")
    .pipe(svgo())
    .pipe(gulp.dest("img"));
});

gulp.task("cwebp", async function() {
  gulp.src("imgwork/jpgpng/*")
    .pipe(cwebp())
    .pipe(gulp.dest("img"));
});

gulp.task("go", gulp.series("serve", "less", "images", "cwebp"));
