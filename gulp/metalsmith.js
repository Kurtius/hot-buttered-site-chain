// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').metalsmith;

var gulp = require('gulp'),
    handlebars = require('handlebars'),
    metalsmith    = require('metalsmith'),
      layouts     = require('metalsmith-layouts'),
      markdown    = require('metalsmith-markdown'),
      collections = require('metalsmith-collections'),
      sitemap     = require('metalsmith-sitemap'),
      permalinks  = require('metalsmith-permalinks'),
      helpers     = require('metalsmith-register-helpers'),
      drafts      = require('metalsmith-drafts');


function setupMetalsmith(callback) {
  var smith = new metalsmith(process.cwd()),
      smithplugins = config.plugins || {};

  smith.clean(config.clean);
  smith.source(config.src+'/content');
  smith.metadata(config.metadata);

  Object.keys(smithplugins).forEach(function(key) {
    var plugin = require(key);
    var options = smithplugins[key];
    smith.use(plugin(options));
  });

  // smith.destination(config.dest);
  smith.destination(config.dest);

  smith.build(function(err) {
  // console.log(smith.metadata());
    if (err) {
      console.log(err);
      return callback(err);
    }
    callback();
  });
}

gulp.task('metalsmith', function(callback) {
  setupMetalsmith(callback);
});

gulp.task('metalsmith:watch', function () {
  gulp.watch(config.src+'/content/**/**', ['metalsmith']);
  gulp.watch(config.src+'/templates/**/**', ['metalsmith']);
});
