/* jshint node: true */
/* jshint camelcase: false */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
'use strict';
module.exports = function (grunt) {
    grunt.config('autoprefixer', {
      options: {
          browsers: ['last 2 versions', 'ie 9']
        },
      dist: {
        files: {
          'assets/css/main.css': 'assets/css/main.css',
        }
      }
  });
};
