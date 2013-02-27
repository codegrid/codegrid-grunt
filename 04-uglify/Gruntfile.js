module.exports = function (grunt) {

  grunt.task.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      jquery: {
        src: 'js/jquery.js',
        dest: 'js/jquery.min.js'
      },
      jqueryui: {
        src: 'js/jquery-ui.js',
        dest: 'js/jquery-ui.min.js'
      }
    }
  });

  grunt.registerTask('default', [ 'uglify' ]);

};
