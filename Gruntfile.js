module.exports = function(grunt) {
	//Project configuration
	grunt.initConfig({
		tag: {
		  banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dev: {
				files: {
					'src/style.css' : 'src/style.scss'
				}
			},
			dist: {
				options: {
					sourcemap: 'none',
					style: 'compressed'
				},
				files: {
					'dist/lantern-minimal.min.css' : 'src/style.scss'
				}
			}
		},
		jshint: {
			files: ['src/lantern.js']
		},
		watch: {
			files: ['src/style.scss', '<%= jshint.files %>'],
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

	//Default tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['sass:dist', 'uglify']);
};
