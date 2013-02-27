module.exports = (grunt) ->

  grunt.registerMultiTask "mycooltask", "This task is cool.", ->

    done = @async()
    self = this
    setTimeout ->
      grunt.log.writeln "target: " + self.target
      grunt.log.writeln "data: " + self.data
      done()
    , 1000
