module.exports = (grunt) ->

  grunt.registerMultiTask "mygreattask", "This task is great.", ->

    grunt.log.writeln "target: " + @target
    grunt.log.writeln "data: " + @data
