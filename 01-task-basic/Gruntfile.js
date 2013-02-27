module.exports = function (grunt) {

  grunt.initConfig({
    mygreattask: {
      target1: 'so great',
      target2: 'very great'
    },
    mycooltask: {
      target1: 'so cool',
      target2: 'very cool'
    }
  });
  
  grunt.registerMultiTask('mygreattask', 'This task is great.', function () {
    grunt.log.writeln('target: ' + this.target);
    grunt.log.writeln('data: ' + this.data);
  });

  grunt.registerMultiTask('mycooltask', 'This task is cool.', function () {
    var done = this.async();
    var self = this;
    setTimeout( function () {
      grunt.log.writeln('target: ' + self.target);
      grunt.log.writeln('data: ' + self.data);
      done();
    }, 1000);
  });

  grunt.registerTask('default', [ 'mygreattask', 'mycooltask' ]);

};
