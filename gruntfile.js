module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'src/application.scss'
        }
      }
    },
    typescript: {
      base: {
        src: ['src/*.ts'],
        dest: 'public/javascripts/application.js',
        options: {
          module: 'amd',
          target: 'es5'
        }
      }
    },
    watch: {
      sass: {
        files: ['src/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      },
      typescript: {
        files: ['src/**/*.ts'],
        tasks: ['typescript'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.registerTask('default', ['sass', 'typescript']);
  grunt.loadNpmTasks('grunt-contrib-watch');
};
