/**
 * initialize
 */
var gulp = require('gulp');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');


// build js
gulp.task('js', function () {
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('bs', function () {
	browserSync({
		server: {
			baseDir: "./"       //対象ディレクトリ
			, index: "index.html"      //インデックスファイル
			, https: true
		}
	});
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['watch']);