// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').browserSync;

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
    middleware = require('connect-gzip-static')(config.server.baseDir);


gulp.task('serve', ['build:dev'], function(callback) {
  browserSync.init(config,
    function (err, bs) {
      bs.addMiddleware("*", function (req, res) {
        // res.writeHead(302, {"Location": "404.html"});
        res.writeHead(302, {"Location": "index.html"});
        res.end("Redirecting!");
      });
    });
});
