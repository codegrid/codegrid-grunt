module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      options: {
        banner: '/* MY GREAT LIBRARY!! */',
        preserveComments: false
      },
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
