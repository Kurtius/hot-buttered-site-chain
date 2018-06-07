// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').assets;

var gulp = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('imgs', function () {
  return gulp.src(config.src.imgs)
    .pipe(gulp.dest(config.dest.imgs))
});
gulp.task('icons', function () {
  return gulp.src(config.src.icons)
    .pipe(gulp.dest(config.dest.icons))
});
gulp.task('fonts', function () {
  return gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.dest.fonts))
});

gulp.task('assets', function (callback) {
  runSequence('imgs', 'icons', 'fonts', callback);
});

gulp.task('assets:watch', function () {
  gulp.watch(config.src.root, ['assets']);
});
