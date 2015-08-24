module.exports = function(grunt) {
	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/lantern.js',
				dest: 'dist/lantern.min.js'
			}
		}
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//Default tasks
	//grunt.registerTask('default', ['uglify']);
	grunt.registerTask('build', ['uglify']);
};
