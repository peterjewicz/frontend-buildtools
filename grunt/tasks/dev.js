/*jshint node: true */
'use strict';
module.exports = function (grunt) {
    grunt.registerTask('dev', [
        'sass',
        'autoprefixer',
        'lint',
        'concat',
        'browserSync',
        'watch'
    ]);
};
