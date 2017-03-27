/* jshint node: true */
/* jshint camelcase: false */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
'use strict';
module.exports = function (grunt) {
    grunt.config('concat', {
      options: {
        separator: ';',
      },
      dist: {
        files: {
          // Compile all custom site scripts into single site_scripts.js
          'assets/js/compiledJS.js': ['assets/js/*.js']
        }
      }
  });
};
