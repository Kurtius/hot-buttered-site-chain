// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').sass;

var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest))
});

gulp.task('sass:watch', function () {
  gulp.watch(config.src, ['sass'])
});
