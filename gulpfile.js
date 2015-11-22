var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('gulp-main-bower-files');

var filter = gulpFilter('**/*.js', '!**/*.min.js');

gulp.task('lint', function() {
  return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('icons', function() { 
    return gulp.src('bower_components/fontawesome/fonts/**.*') 
        .pipe(gulp.dest('dist/fonts')); 
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass({
          outputStyle: 'compressed',
          includePaths: ['bower_components/fontawesome/scss/']}))
        .pipe(gulp.dest('css'));
});

//JS Libs
gulp.task('bowerjs', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(filter)
        .pipe(concat('dependencies.js'))
        .pipe(gulp.dest('dist/lib'))
        .pipe(rename('dependencies.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'icons', 'sass', 'bowerjs', 'scripts', 'watch']);
