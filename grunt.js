module.exports = function(grunt) {

    // Load grunt-compass plugin
    grunt.loadNpmTasks('grunt-compass');

    // Project configuration.
    grunt.initConfig({
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
                    'js/plugins/**/*.js'
                ],
                dest: 'js/plugins.js'
            },
            prod: {
                src: [
                    'js/plugins.js',
                    'js/script.js'
                ],
                dest: 'js/prod.js'
            }
        },
        // Lists of files to be minified with UglifyJS, used by the "min" task.
        min: {
            prod: {
                src: 'js/prod.js',
                dest: 'js/script.min.js'
            }
        },
        // Lists of files or URLs to be unit tested with QUnit, used by the "qunit" task.
        qunit: {
            all: ['js/test/**/*.html']
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
            files: ['grunt.js', 'js/plugins/**/*.js', 'js/script.js', 'sass/**/*.scss'],
            tasks: ['compass:dev', 'concat', 'min']
        }
    });

    // Default task.
    grunt.registerTask('default', 'watch');
};