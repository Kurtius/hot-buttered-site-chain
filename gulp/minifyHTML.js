
// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').minifyHTML;

var gulp   = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    size = require('gulp-size');


gulp.task('minifyHTML', function() {
  return gulp.src(config.src)
    .pipe(size({title:'HTML   '}))
    .pipe(htmlmin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title:'HTML ⚡️ '}));
});
