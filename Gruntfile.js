module.exports = function(grunt) {
	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		tag: {
		  banner: '/*! Lantern.js <%= pkg.version %> | www.mattlean.com */\n'
		},
		sass: {
			dev: {
				files: {
					'src/lantern-minimal.css' : 'src/lantern-minimal.scss'
				}
			},
			dist: {
				options: {
					sourcemap: 'none',
					style: 'compressed'
				},
				files: {
					'dist/lantern-minimal.min.css' : 'src/lantern-minimal.scss'
				}
			}
		},
		jshint: {
			files: ['src/lantern.js']
		},
		watch: {
			files: ['src/lantern-minimal.scss', '<%= jshint.files %>'],
			tasks: ['sass:dev', 'jshint']
		},
		uglify: {
			options: {
				banner: '<%= tag.banner %>'
			},
			build: {
				src: 'src/lantern.js',
				dest: 'dist/lantern.min.js'
			}
		}
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//Tasks
	grunt.registerTask('default', ['sass:dev', 'watch']);
	grunt.registerTask('build', ['sass:dist', 'uglify']);
};
