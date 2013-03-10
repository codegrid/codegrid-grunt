module.exports = function (grunt) {

  grunt.registerTask('hello', 'description here', function() {
    grunt.log.writeln('hello! hello!');
  });

  grunt.registerTask('default', [ 'hello' ]);

};
