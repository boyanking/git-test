var gulp = require('gulp');
var sass = require('gulp-ruby-sass');


gulp.task('sass', function() {  
  return gulp.src('main.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(''))
});
