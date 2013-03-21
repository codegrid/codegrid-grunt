module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      options: {
        banner: '/* MY GREAT LIBRARY!! */'
      },
      foo: {
        src: 'js/foo.js',
        dest: 'js/foo.min.js'
      },
      bar: {
        src: 'js/bar.js',
        dest: 'js/bar.min.js'
      }
    }
  });

  grunt.registerTask('default', [ 'uglify' ]);

};
