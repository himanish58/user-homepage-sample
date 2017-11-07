const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-babel-minify');

gulp.task('less', function () {
  gulp.src('src/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('src/css'));
});

gulp.task('cssmin', function () {
  gulp.src('src/css/*')
  .pipe(cssmin())
  .pipe(gulp.dest('build/css'));
});

gulp.task('minify', function () {
  gulp.src('src/js/*')
  .pipe(minify())
  .pipe(gulp.dest('build/js'));
});

gulp.task('imagemin', function () {
  gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build/images'));
});

gulp.task('copyHTML', function () {
  gulp.src('src/*')
  .pipe(gulp.dest('build'));
});

gulp.task('default', ['less', 'minify', 'imagemin', 'cssmin', 'copyHTML']);

gulp.task('watch', function () {
  gulp.watch('src/less/*.less', ['less']);
});
