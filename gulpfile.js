const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('minify-default-head-script', function () {
  gulp.src(['./assets/js/default/jquery-3.3.1.min.js', './assets/js/default/popper.min.js', './assets/js/default/bootstrap.min.js', './assets/js/default/telemetry_service.js', './assets/js/default/d3.js', './assets/js/default/topojson.js', './assets/js/default/common.js', './assets/js/default/tabs.js', './assets/js/default/home.js', './assets/js/default/fontSizing.js', './assets/js/default/translations.js'])
    .pipe(concat('default-head.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('minify-dashboard-head-script', function () {
  gulp.src(['./assets/js/default/jquery-3.3.1.min.js', './assets/js/default/popper.min.js', './assets/js/default/bootstrap.min.js', './assets/js/default/telemetry_service.js', './assets/js/default/d3.js', './assets/js/default/topojson.js', './assets/js/default/common.js', './assets/js/default/tabs.js', './assets/js/default/custom.js', './assets/js/default/fontSizing.js', './assets/js/default/translations.js'])
    .pipe(concat('dashboard-head.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('minify-catalogue-details-head-script', function () {
  gulp.src(['./assets/js/default/jquery-3.3.1.min.js', './assets/js/default/popper.min.js', './assets/js/default/bootstrap.min.js', './assets/js/default/moment.min.js', './assets/js/default/datepicker.min.js', './assets/js/default/catalogue-details.js', './assets/js/default/fontSizing.js'])
    .pipe(concat('catalogue-head.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('minify-custom-head-script', function () {
  gulp.src(['./assets/js/default/jquery-3.3.1.min.js', './assets/js/default/telemetry_service.js', './assets/js/default/common.js', './assets/js/default/fontSizing.js', './assets/js/default/translations.js'])
    .pipe(concat('custom-head.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('minify-default-foot-script', function () {
  gulp.src(['./assets/js/default/main.js', './assets/js/default/verticals.js', './assets/js/default/key-milestone.js'])
    .pipe(concat('default-foot.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('minify-helpcenter-preload-script', function () {
  gulp.src(['./assets/js/helpcenter/jquery-3.3.1.min.js', './assets/js/helpcenter/bootstrap-3.3.7.min.js', './assets/js/helpcenter/owlcarousel.js', './assets/js/helpcenter/jquery-toc.js', './assets/js/helpcenter/custom.js'])
    .pipe(concat('helpcenter-preload.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('minify-helpcenter-postload-script', function () {
  gulp.src(['./assets/js/helpcenter/elevatezoom.js', './assets/js/helpcenter/jspdf.js'])
    .pipe(concat('helpcenter-postload.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('watch', function () {
  gulp.watch('./assets/js/default/*.js', ['minify-default-head-script']);
  gulp.watch('./assets/js/default/*.js', ['minify-dashboard-head-script']);
  gulp.watch('./assets/js/default/*.js', ['minify-catalogue-details-head-script']);
  gulp.watch('./assets/js/default/*.js', ['minify-custom-head-script']);
  gulp.watch('./assets/js/default/*.js', ['minify-default-foot-script']);
  gulp.watch('./assets/js/helpcenter*/*.js', ['minify-helpcenter-preload-script']);
  gulp.watch('./assets/js/helpcenter/*.js', ['minify-helpcenter-postload-script']);
});

gulp.task('default', ['watch']);