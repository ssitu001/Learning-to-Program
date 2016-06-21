module.exports = function(grunt) {
  //project configuration
  grunt.initConfig({
    //config task here
    concat: {
      release: {
        src: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/replaceImages.js', 'js/main.js'],
        dest: 'release/main.js'
      }
    },
    copy: {
      release: {
        src: 'mainfest.json',
        dest: 'release/mainfest.json'
      }
    },
    jshint: {
      files: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/replaceImages.js', 'js/main.js']
    },
    watch: {
      files: ['<%= jshint.files %>', 'mainfest.json'],
      tasks: ['default']
    }
  });
  //load grunt plugins here
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //register task here
  grunt.registerTask('default', ['jshint', 'concat', 'copy']);
}