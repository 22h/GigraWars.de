// Required modules
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    debug = require('gulp-debug'),
    jsmin = require('gulp-jsmin');

// Paths
var distPath = 'web/include/';
var srcPath = '';

/*
 ==============
 Default
 ==============
 */

gulp.task('default', ['css', 'js']);

/*
 ==============
 Watch
 ==============
 */

gulp.task('watch', function () {
    gulp.watch(srcPath + 'sass/*.scss', ['css']);
    gulp.watch(srcPath + 'js/*.js', ['js']);
});

/*
 ==============
 Styles
 ==============
 */

gulp.task('sass', function () {
    return gulp.src(srcPath + 'sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(distPath + 'css/'));
});
gulp.task('css', ['sass'] , function () {
    var cssFiles = [
        distPath + 'css/app.css'
    ];

    return gulp.src(cssFiles)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(distPath + 'css/'))
        .pipe(cssmin())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(distPath + 'css/'));
});

/*
 ==============
 javascript
 ==============
 */

gulp.task('js', function(){
    return gulp.src([srcPath + 'js/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(distPath + 'js/'))
        .pipe(jsmin())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(distPath + 'js/'));
});
