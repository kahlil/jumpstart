module.exports = function(grunt) {

    // Load grunt-compass plugin
    grunt.loadNpmTasks('grunt-compass');

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        // Project metadata, used by some directives, helpers and tasks.
        meta: {},
        // Lists of files to be concatenated, used by the "concat" task.
        concat: {
            plugins: {
                src: [
                    'js/libs/log.js',
                    'js/libs/pubsub.js',
                    'js/libs/store.js',
                    'js/libs/json.js',
                    'js/libs/handlebars-1.0.0.beta.6.js',
                    'js/plugins/**/*.js'
                ],
                dest: 'js/plugins.js'
            },
            prod: {
                src: [
                    '<config:concat.plugins.dest>',
                    'js/script.js'
                ],
                dest: 'js/prod.js'
            }
        },
        // Lists of files to be minified with UglifyJS, used by the "min" task.
        min: {
            prod: {
                src: '<config:concat.prod.dest>',
                dest: 'js/script.min.js'
            }
        },
        // Lists of files or URLs to be unit tested with QUnit, used by the "qunit" task.
        qunit: {
            all: ['js/test/**/*.html']
        },
        lint: {
            src: ['js/script.js' ],
            grunt: ['grunt.js'],
            tests: ['tests/**/*.js']
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: false,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            src: {
                globals: {
                    jQuery: true,
                    Modernizr: true
                }
            },
            grunt: {
                options: {node: true},
                globals: { module: true }
            },
            tests: {
                options: { jquery: true },
                globals: {
                    jQuery: true,
                    Modernizr: true
                }
            }
        },
        compass: {
            dev: {
                src: 'sass',
                dest: 'css/dev',
                linecomments: true,
                forcecompile: true,
                debugsass: false,
                images: 'img'
            },
            prod: {
                src: 'sass',
                dest: 'css/prod',
                outputstyle: 'compressed',
                linecomments: false,
                forcecompile: true,
                debugsass: false,
                images: 'img'
            }
        },
        // Configuration options for the "watch" task.
        watch: {
            dev: {
              files: ['grunt.js', 'js/plugins/**/*.js', 'js/script.js', 'sass/**/*.scss'],
              tasks: ['compass:dev', 'lint']
            },
            prod: {
              files: ['grunt.js', 'js/plugins/**/*.js', 'js/script.js', 'sass/**/*.scss'],
              tasks: ['compass:prod', 'lint', 'concat', 'min']
            }
        }
    });

    grunt.registerTask('dev', 'watch:dev');
    grunt.registerTask('prod', 'watch:prod');

    // Default task.
    grunt.registerTask('default', 'watch:dev');
};