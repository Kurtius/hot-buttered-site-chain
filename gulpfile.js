/*
  Default gulp setup file.
  we moved all tasks to ./gulp/**
  so we have to require all of them here…
  for configuration of all tasks see ./gulpconfig.js
*/
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/', { recurse: true });
