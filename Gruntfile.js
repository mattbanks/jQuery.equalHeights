'use strict';
module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['*.js', '**/*.html']
            }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [ 'jquery.equalheights.js' ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            options: {
                preserveComments: 'some'
            },
            main: {
                files: {
                    'jquery.equalheights.min.js': [ 'jquery.equalheights.js' ]
                }
            }
        }

    });

    // register task
    grunt.registerTask('default', ['watch']);

};
