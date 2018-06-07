// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').minifyJS;

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    size = require('gulp-size'),
    pump = require('pump');


gulp.task('minifyJS', function (callback) {
  var options = {
    preserveComments: config.options.preserveComments
  };
    pump([
      gulp.src(config.src),
      size({title:'JS   '}),
      uglify(),
      gulp.dest(config.dest),
      size({title:'JS ⚡️ '})
    ],
    callback
  );
});
