module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    sass: {
      styles: {
        src: 'scss/styles.scss',
        dest: 'css/styles.css'
      }
    }
  });

  grunt.registerTask('default', [ 'sass' ]);

};
