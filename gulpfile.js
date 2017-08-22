var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var ghPages = require('gulp-gh-pages');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

gulp.task('sass-focusing', function () {
	//Убрать лишний код и грохнуть перед деплоем
	gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
	.pipe(gulp.dest('./src/scss/'));

	gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/bootstrap/**/*.scss')
	.pipe(gulp.dest('./src/scss/bootstrap'));

	gulp.src(['./bower_components/font-awesome/scss/*.scss', '!./bower_components/font-awesome/scss/font-awesome.scss'])
	.pipe(gulp.dest('./src/scss/font-awesome/'));

	gulp.src('./bower_components/font-awesome/scss/font-awesome.scss')
	.pipe(rename({prefix: '_'}))
	.pipe(gulp.dest('./src/scss/font-awesome/'));
});

gulp.task('sass-watch', function () {
	return gulp.src('./src/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.stream());
});

gulp.task('js', function () {
	gulp.src(['./bower_components/jquery/dist/jquery.min.js', './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js', './src/js/common.js'])
	.pipe(jsmin())
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('./build/js'));

	gulp.src(['./bower_components/html5shiv/dist/html5shiv.min.js', './src/js/for-ie.js'])
	.pipe(jsmin())
	.pipe(concat('ie-support.js'))
	.pipe(gulp.dest('./build/js'));
});

gulp.task('c', function () {
	gulp.src(['./text-1.txt', './text-2.txt', './text-3.txt'])
	.pipe(concat('all-text.txt'))
	.pipe(gulp.dest('./'));
});

gulp.task('fonts', function(){
	gulp.src('./bower_components/font-awesome/fonts/*.*').pipe(gulp.dest('./build/fonts/'));
	gulp.src('./bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*').pipe(gulp.dest('./build/fonts/bootstrap/'));
});

gulp.task('img', function(){
	return gulp.src('./src/img/**/*.+(jpg|png|svg|gif)')
	.pipe(imagemin())
	.pipe(gulp.dest('./build/img/'))
});

gulp.task('deploy', function() {
	return gulp.src('./**/*')
	.pipe(ghPages());
});

gulp.task('serve', ['sass-watch'], function() {

	browserSync.init({
		server: "./"
	});
	gulp.watch("./src/js/*.js", ['js']);
	gulp.watch("./src/scss/*.scss", ['sass-watch']);
	gulp.watch("./build/*.html").on('change', browserSync.reload);
});

gulp.task('build', ['sass-focusing', 'sass-watch', 'js', 'fonts', 'img'], function () {
	gulp.start('sass-focusing', 'sass-watch', 'js', 'fonts', 'img');
});

gulp.task('watch', ['sass-watch', 'js', 'serve'], function () {
	gulp.watch('./src/scss/*.scss', ['sass-watch']);
	gulp.watch('./src/js/*.js');
});

gulp.task('default', ['watch'], function() {
	gulp.start('sass-watch', 'js');
});