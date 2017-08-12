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

gulp.task('sass', function () {
	gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/bootstrap/**/*.scss')
	.pipe(gulp.dest('./scss'));
	gulp.src('./bower_components/font-awesome/scss/**/*.scss')
	.pipe(gulp.dest('./scss'));
	// return gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
	// .pipe(rename({prefix: '_'}))
	// .pipe(gulp.dest('./scss')) && gulp.src('./scss/*.scss')
	// .pipe(sass().on('error', sass.logError))
	// .pipe(cssmin())
	// .pipe(rename({suffix: '.min'}))
	// .pipe(gulp.dest('./css'))
	// .pipe(browserSync.stream());
	});

gulp.task('js', function () {
	gulp.src('./bower_components/jquery/dist/jquery.min.js')
	.pipe(concat('./bower_components/html5shiv/dist/bootstrap.min.js'))
	.pipe(rename({
		basename: 'jquery-vs-bootstrap', 
		suffix: '.min',
		extname: '.js'
	}))
	.pipe(gulp.dest('./js'));
	gulp.src('./bower_components/html5shiv/dist/html5shiv.min.js')
	.pipe(rename({
		basename: 'ie-support.js', 
		suffix: '.min',
		extname: '.js'
	}));
	gulp.src('./js/*.js')
	.pipe(jsmin())
	.pipe(gulp.dest('./js'));
	});

gulp.task('html', function() {
	return gulp.src('./*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./'));
	});

gulp.task('fonts', function(){
	gulp.src('./bower_components/font-awesome/fonts/*.*').pipe(gulp.dest('./fonts'));
	gulp.src('./bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*').pipe(gulp.dest('./fonts'));
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

gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: "./"
		});
	gulp.watch("./js/*.js", ['js']);
	gulp.watch("./scss/*.scss", ['sass']);
	gulp.watch("./*.html").on('change', browserSync.reload);
	});

// gulp.task('browser-sync', function() {
// 	browserSync.init({
// 		server: {
// 			baseDir: "./"
// 		}
// 		});
// 	});

gulp.task('watch', ['sass', 'js', 'serve'], function () {
	gulp.watch('./scss/*.scss', ['sass']);
	gulp.watch('./js/*.js');
	});

gulp.task('default', ['serve'], function() {
	gulp.start('sass', 'js');
	});