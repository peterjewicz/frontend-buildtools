/*jshint node: true */
'use strict';
module.exports = function (grunt) {
    grunt.config('jshint', {
        all: ['Gruntfile.js', 'assets/js/**.js', 'assets/js/**/*.js']
    });
};
