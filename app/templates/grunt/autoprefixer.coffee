module.exports = (grunt) ->
  grunt.config "autoprefixer",
  files:
    src: 'dist/css/mq-base.css'
    dest: 'dist/css/mq-base.css'
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']

  grunt.loadNpmTasks 'grunt-autoprefixer'