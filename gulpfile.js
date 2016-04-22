'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

// compile
gulp.task('sass', function(){
    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

// compile and watch
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./scss/**/*.scss', ["sass"])
});

gulp.task('default', ['sass', 'watch']);
