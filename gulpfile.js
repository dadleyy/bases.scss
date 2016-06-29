"use strict";

const gulp   = require("gulp");
const sass   = require("gulp-sass");
const min    = require("gulp-clean-css");
const del    = require("del");
const rename = require("gulp-rename");

gulp.task("clean:css", function() {
  return del(["./dist"]);
});

gulp.task("sass:debug", ["clean:css"], function() {
  let source = [
    "./src/bases.sass"
  ];

  return gulp.src(source)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"));
});

gulp.task("sass:release", ["sass:debug"], function() {
  return gulp.src(["./dist/bases.css"])
    .pipe(min())
    .pipe(rename(function(path) { path.extname = ".min.css"; }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["sass:debug"]);
gulp.task("release", ["sass:release"]);
