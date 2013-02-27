module.exports = function (grunt) {

  grunt.task.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    concat: {
      css: {
        src: [
          'css/normalize.min.css',
          'css/styles.min.css'
        ],
        dest: 'css/all.min.css'
      }
    }
  });

  grunt.registerTask('default', [ 'concat' ]);

};
