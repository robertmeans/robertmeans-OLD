module.exports = function(grunt) {

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'js/quotable-scripts.js': ['components/js-to-compile-quotable/_scripts-staging.js']
        } //files
      } //my_target
    }, //uglify   

    /* Sass */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'style-expanded-quotable.css': 'components/sass-quotable/style.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'quotable-style.css': 'components/sass-quotable/style.scss'
        }
      }
    },
    /* Autoprefixer */
    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      // prefix all files
      multiple_files: {
        expanded: true, 
        flatten: true,
        src: '*.css',
        dest: ''
      }
    },

      /* Watch */
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['components/js-to-compile-quotable/_scripts-staging.js'],
        tasks: ['uglify']
      }, //scripts      
      css: {
        files: '**/*.scss',
        tasks: ['sass','autoprefixer']
      }, // css
      hypertext: {
        files: ['*.php','*.htm','_includes/*.php']
      } //hypertext
    }, //watch

  });
  grunt.loadNpmTasks('grunt-contrib-uglify'); //uglify minifies js upon save
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}