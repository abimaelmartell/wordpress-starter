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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};
