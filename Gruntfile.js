module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            styles: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "assets/css/main.css": "assets/less/main.less"
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:M o") %> */\n'
            },
            vendor: {
                files: {
                    'assets/js/vendor.js': [
                        'assets/vendor/jquery/dist/jquery.js'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
