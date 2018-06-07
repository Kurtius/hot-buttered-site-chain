// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').purifyCSS;

var gulp = require('gulp'),
    purify = require('gulp-purifycss'),
    size = require('gulp-size');


gulp.task('purifyCSS', function() {
  return gulp.src(config.src)
    .pipe(size({title:'CSS   '}))
    .pipe(purify([config.js,config.html],config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title:'CSS 🌀 '}));
});
