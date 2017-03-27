/* jshint node: true */
/* jshint camelcase: false */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
'use strict';
module.exports = function (grunt) {
    grunt.config('uglify', {
      dist: {
          files: {
            'assets/js/compiledJS.min.js': ['assets/js/compiledJS.js']
          }
        }
  });
};
