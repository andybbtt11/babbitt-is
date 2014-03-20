module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON( 'package.json' ),
    banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' +
    'Built: <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> CST\n' +
    '*   Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> All Rights Reserved.\n*/\n',

    compass: {   
      dist:{
        options: {
          config: 'config/config.rb',
          cssDir: 'public/css',
          sassDir: 'sass',
          environment: 'production',
          outputStyle:'expanded'
        }
      }
    },

    jshint: {
      all: [
        'Gruntfile.js'
      ]
    },

    requirejs: {
      options: {
        almond: true,
        mainConfigFile: 'javascripts/bootstrap.js',
        include: [
            'app-view-component',
            'filter-component',
            'header-component',
            'section-component',
            'post-component',
            'comments-component',
            'upload-component',
            'comment-upload-component'
        ],
        out: 'public/js/compiled.js',
        name: 'bootstrap',
        wrap: false // Do not wrap everything in an IIFE
      },
      dist: {
        options: {
          optimize: 'none'
        }
      }
    },

    // Prepend files with build date and copyright info.
    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: [
          'public/js/compiled.js',
          'public/css/*.css'
        ]
      }
    },

    watch: {
      js: {
        files: [
          'javascripts/*.js',
          'javascripts/**/*.js',
          'javascripts/**/**/*.js'
        ],
        tasks: [ 'requirejs:dist' ]
      },
      scss: {
        files: ['sass/**/*.scss'],
        tasks: [ 'compass:dist']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks( 'grunt-requirejs' );
  grunt.loadNpmTasks( 'grunt-banner' );

  grunt.registerTask('default', ['jshint', 'compass', 'requirejs:dist', 'usebanner', 'watch']);

};