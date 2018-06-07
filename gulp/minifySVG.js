// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').minifySVG;

var gulp = require('gulp'),
    svgo = require('gulp-svgo'),
    size = require('gulp-size');


gulp.task('minifySVG', function() {
  return gulp.src(config.src)
    .pipe(size({title:'SVG   '}))
    .pipe(svgo())
    .pipe(gulp.dest(config.dest))
    .pipe(size({title:'SVG ⚡️ '}));
});
