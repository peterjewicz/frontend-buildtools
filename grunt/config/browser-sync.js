/* jshint node: true */
'use strict';
module.exports = function (grunt) {
    grunt.config('browserSync', {
      files : [
      'assets/css/*.css',
      'assets/js/*.js'
      ],
      options: {
        watchTask: true,
        proxy: 'localhost',
        open: false,
        notify: {
          styles: {
            top: 'auto',
            bottom: '0'
          }
        }
      }
    });
};
