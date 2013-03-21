module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    cssmin: {
      normalize: {
        src: 'css/normalize.css',
        dest: 'css/normalize.min.css'
      },
      styles: {
        src: 'css/styles.css',
        dest: 'css/styles.min.css'
      }
    }
  });

  grunt.registerTask('default', [ 'cssmin' ]);

};
