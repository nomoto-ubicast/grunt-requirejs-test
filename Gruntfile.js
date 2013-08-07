module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: './js/**',
      tasks: ['requirejs']
    },
    requirejs: {
      compile: {
        options: {
          name : 'main',  // mainで読み込むjsのpath
          baseUrl: "./js",
          mainConfigFile: './js/main.js',
          out: "./build/dist.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);
}
