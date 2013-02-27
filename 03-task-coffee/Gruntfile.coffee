module.exports = (grunt) ->

  grunt.task.loadTasks "mytasks"

  grunt.initConfig
    mygreattask:
      target1: "so great"
      target2: "very great"
    mycooltask:
      target1: "so cool"
      target2: "very cool"

  grunt.registerTask "default", ["mygreattask", "mycooltask"]
