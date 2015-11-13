/*******************************
 Setup.
 *******************************/

 var gulp = require('gulp'),
     concat = require('gulp-concat'),
     concatCss = require('gulp-concat-css'),
     uglify = require('gulp-uglify'),
     minifyCss = require('gulp-minify-css'),
     react = require('gulp-react'),
     debug = require('gulp-debug');

// List all paths used.
var path = {
  JS: ['script/components/*.js', 'script/valet.js' ],
  CSS: ['style/reset.css', 'style/app.css'],
  MINIFIED_OUT_JS: 'valet.min.js',
  SEMANTIC: 'style/semantic/*.css',
  MINIFIED_OUT_SEMANTIC: 'semantic.min.css',
  CSS: ['style/reset.css', 'style/app.css'],
  MINIFIED_OUT_CSS: 'app.min.css',
  DEST: 'dist'
};


/*******************************
 Tasks.
 *******************************/

 // Takes all scripts in /script and creates a minified production script.
 gulp.task('transform', function () {
     return gulp.src(path.JS)
         .pipe(react())
         .pipe(debug())
         .pipe(concat(path.MINIFIED_OUT_JS))
         .pipe(gulp.dest(path.DEST))
 });

 // Minify app.css and reset.css.
 gulp.task('css', function () {
     return gulp.src(path.CSS)
         .pipe(debug())
         .pipe(concat(path.MINIFIED_OUT_CSS))
         .pipe(minifyCss())
         .pipe(gulp.dest(path.DEST))
 });


     /*******************************
      Semantic UI tasks.
      *******************************/
 // Task responsible for minifying semantic css.
 gulp.task('semantic-css', function() {
     return gulp.src(path.SEMANTIC)
         .pipe(debug())
         .pipe(concatCss(path.MINIFIED_OUT_SEMANTIC))
         .pipe(minifyCss())
         .pipe(gulp.dest(path.DEST))
 });


 /*******************************
  Watchers.
  *******************************/
gulp.task('watch', function() {
  gulp.watch('script/components/*.js', ['transform']);
});


// Default task.
gulp.task('semantic', ['semantic-css']);
gulp.task('default', ['transform', 'css', 'semantic']);
