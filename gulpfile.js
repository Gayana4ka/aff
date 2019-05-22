var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: ''
        },
        notify: false
    })
});

gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function () {
    return gulp.src('*.html')
        .pipe(browserSync.reload({ stream: true}))
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('watch', 'sass', 'browser-sync'));

