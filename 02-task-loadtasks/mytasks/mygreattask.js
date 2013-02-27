module.exports = function (grunt) {

  grunt.registerMultiTask('mygreattask', 'This task is great.', function () {
    grunt.log.writeln('target: ' + this.target);
    grunt.log.writeln('data: ' + this.data);
  });

};
