/*******************************
 Setup.
 *******************************/

 var gulp = require('gulp'),
     babelify = require('babelify'),
     browserify = require('browserify'),
     buffer = require('vinyl-buffer'),
     source = require('vinyl-source-stream'),
     uglify = require('gulp-uglify'),
     concatCss = require('gulp-concat-css'),
     minifyCss = require('gulp-minify-css'),
     debug = require('gulp-debug');

// List all paths used.
var path = {
  JS: './script/valet.js',
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
 gulp.task("js", function() {
   return browserify(path.JS)
     .transform(babelify, {presets: ["es2015", "react"]})
     .bundle()
     .pipe(source(path.MINIFIED_OUT_JS)) // returns a vinyl-source-stream
     .pipe(buffer()) // convert to a vinyl-buffer
     .pipe(uglify()) // uglify everything
     .pipe(gulp.dest(path.DEST));
 });


 // Minify app.css and reset.css.
 gulp.task('css', function () {
     return gulp.src(path.CSS)
         .pipe(debug())
         .pipe(concatCss(path.MINIFIED_OUT_CSS))
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
  gulp.watch('./script/components/*.js', ['js']);
});


// Default task.
gulp.task('semantic', ['semantic-css']);
gulp.task('default', ['js', 'css', 'semantic']);
