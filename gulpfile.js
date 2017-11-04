const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('less', function () {
  gulp.src('src/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('src/css'));
});

gulp.task('uglify', function () {
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
});

gulp.task('imagemin', function () {
  gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build/images'));
});

gulp.task('default', ['less', 'uglify', 'imagemin']);

gulp.task('watch', function () {
  gulp.watch('src/less/*.less', ['less']);
});
