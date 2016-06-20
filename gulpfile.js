/**
 * initialize
 */
var gulp = require('gulp');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');


// build js
gulp.task('js', function () {
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['watch']);