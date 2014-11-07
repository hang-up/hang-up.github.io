module.exports = function(grunt) {
    
    //Project configuration
    grunt.initConfig( {
        pkg: grunt.file.readJSON("package.json"),
        
        cssmin: {
            add_banner : {
                options : {
                    banner: "/* style.css minified */"
                },
                files: {
                    'css/style.min.css' : ["css/style.css"],
                    'css/reset.min.css' : ["css/reset.css"]
                }
            }
        },
        
        uglify: {
          build: {
            src: 'js/camille.js',
            dest: 'js/camille.min.js'
          }
        }
    });
    
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    grunt.registerTask('default', ['cssmin', 'uglify']);
};