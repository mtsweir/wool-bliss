
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify : {
			dev: {
				options: {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: 'src/js/scripts.js',
				dest: 'js/scripts.js'
			},
			build: {
				src: 'src/js/*.js',
				dest: 'js/scripts.min.js'
			}
		},
		sass : {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'css/style.css' : 'src/scss/app.scss',
					'css/bootstrap.css' : 'src/scss/bootstrap.scss'
				}
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/style.css' : 'src/scss/app.scss',
					'css/bootstrap.css' : 'src/scss/bootstrap.scss'
				}
			}
		},
		watch : {
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify:dev']
			},
			css: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass:dev']
			}
		}
		// ,
		// clean : {
		//   css: ['css/style.css']
		// }

	});

	// Load the plugins
	//grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	// Register task(s)
	grunt.registerTask('default', ['uglify:dev', 'sass:dev', 'watch']);
	grunt.registerTask('build', ['uglify:build', 'sass:build']);

}
