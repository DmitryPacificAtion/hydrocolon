var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var ghPages = require('gulp-gh-pages');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

gulp.task('sass-focusing', function () {
	//Убрать лишний код и грохнуть перед деплоем
	gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
	.pipe(gulp.dest('./scss/'));
	gulp.src('./bower_components/font-awesome/scss/font-awesome.scss')
	.pipe(rename({prefix: '_'}))
	.pipe(gulp.dest('./scss'));

	// Выбрать только необходимые файлы
	gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/bootstrap/**/*.scss')
	.pipe(gulp.dest('./scss/bootstrap'));
	gulp.src('./bower_components/font-awesome/scss/*.scss')
	.pipe(gulp.dest('./scss/font-awesome'));
});

gulp.task('sass-watch', function () {
	return gulp.src('./scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
});

gulp.task('js', function () {
	return gulp.src('./bower_components/jquery/dist/jquery.min.js')
	.pipe(concat('./bower_components/bootstrap-sass/assets/javascripts/bootstrap/*.js'))
	.pipe(concat('./bower_components/html5shiv/dist/html5shiv.min.js'))
	.pipe(concat('./js/ie-support.js'))
	.pipe(concat('./js/common.js'))
	.pipe(jsmin())
	.pipe(rename({
		basename: "common",
		suffix: ".min",
		extname: ".js"
	}))
	.pipe(gulp.dest('./'));
});

gulp.task('html', function() {
	return gulp.src('./*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./'));
});

gulp.task('fonts', function(){
	gulp.src('./bower_components/font-awesome/fonts/*.*').pipe(gulp.dest('./fonts/font-awesome'));
	gulp.src('./bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*').pipe(gulp.dest('./fonts/bootstrap'));
});

gulp.task('img', function(){
	return gulp.src('./img/*.jpg')
	.pipe(imagemin())
	.pipe(gulp.dest('./img'))
});

gulp.task('deploy', function() {
	return gulp.src('./**/*')
	.pipe(ghPages());
});

gulp.task('serve', ['sass-watch'], function() {

	browserSync.init({
		server: "./"
	});
	gulp.watch("./js/*.js", ['js']);
	gulp.watch("./scss/*.scss", ['sass-watch']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

// gulp.task('browser-sync', function() {
// 	browserSync.init({
// 		server: {
// 			baseDir: "./"
// 		}
// 		});
// 	});

gulp.task('build', ['sass-focusing', 'sass-watch', 'js', 'fonts', 'img', 'serve'], function () {
	gulp.start('sass-focusing', 'sass-watch', 'js', 'fonts', 'img', 'serve');
});

gulp.task('watch', ['sass-watch', 'js', 'serve'], function () {
	gulp.watch('./scss/*.scss', ['sass-watch']);
	gulp.watch('./js/*.js');
});

gulp.task('default', ['watch'], function() {
	gulp.start('sass-watch', 'js');
});