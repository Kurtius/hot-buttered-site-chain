// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').minifyCSS;

var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    size = require('gulp-size');


gulp.task('minifyCSS', function() {
  return gulp.src(config.src)
    .pipe(size({title:'CSS   '}))
    .pipe(cleanCSS({
      debug: config.options.debug,
      processImport: config.options.processImport,
      processImportFrom: config.options.processImportFrom,
      keepSpecialComments: config.options.keepSpecialComments
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title:'CSS ⚡️ '}));
});
