module.exports = function (grunt) {

  grunt.registerMultiTask('mycooltask', 'This task is cool.', function () {
    var done = this.async();
    var self = this;
    setTimeout( function () {
      grunt.log.writeln('target: ' + self.target);
      grunt.log.writeln('data: ' + self.data);
      done();
    }, 1000);
  });

};
