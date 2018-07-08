// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').minifyImages;

var gulp   = require('gulp'),
    size = require('gulp-size'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin');


gulp.task('minifyImages', function() {
  return gulp.src(config.src)
    .pipe(size({title:'original Images:'}))
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title:'minified Images:'}));
});
