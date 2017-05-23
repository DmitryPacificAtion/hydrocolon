var gulp = require('gulp');
var sass = require('gulp-sass');
var jquery = require('jquery');
var bootstrap = require('bootstrap-sass');
// var html5shiv = require('html5shiv');


// var browserSync = require('browser-sync');
// var autoprefixer = require('gulp-autoprefixer');
// var concat = require('gulp-concat');
// var cleanCss = require('gulp-clean-css');
// var uglify = require('gulp-uglify');
// var htmlmin = require('gulp-htmlmin');
// var imagemin = require('gulp-imagemin');
// var minify = require('gulp-minify');
// var rigger = require('gulp-rigger');
// var sourcemaps = require('gulp-sourcemaps');
// var pngquant = require('imagemin-pngquant');
// var livereload = require('livereload');

var paths = {
	// scripts: 'app/frontend/js/*.js',
	scss: 'app/frontend/scss/**/*.scss',
	// images: 'app/frontend/img/**/*'
}

gulp.task('scss', function(){
	return gulp.src(paths.scss)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('build/css'));
}); 

// gulp.task('jquery', function(){});

gulp.task('watch', function (){
  gulp.watch(paths.bootstrap, ['bootstrap']);
  gulp.watch(paths.scss, ['scss']);
	gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['watch', 'scss']);