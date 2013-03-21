module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
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
