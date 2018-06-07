// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').scripts;

var gulp = require('gulp'),
    watch = require('gulp-watch');


gulp.task('scripts', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
});

gulp.task('scripts:watch', function () {
  gulp.watch(config.src, ['scripts'])
});
