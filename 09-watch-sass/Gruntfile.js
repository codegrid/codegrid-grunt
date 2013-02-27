module.exports = function (grunt) {

  grunt.task.loadNpmTasks('grunt-contrib-sass');
  grunt.task.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    sass: {
      styles: {
        src: 'scss/styles.scss',
        dest: 'css/styles.css'
      }
    },
    watch: {
      sass: {
        files: '<%= sass.styles.src %>',
        tasks: [ 'sass' ]
      }
    }
  });

  grunt.registerTask('default', [ 'sass' ]);

};
