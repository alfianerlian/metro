var gulp = require('gulp');

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./src/metro.css')
        .pipe(postcss([ autoprefixer({ browsers: ['firefox >=3.6', 'safari >= 4', 'chrome >=4', 'ie >= 9', 'opera >= 11.5'] }) ]))
        .pipe(gulp.dest('./'));
});


gulp.task('all', function() {
    gulp.watch('style.css',['autoprefixer']);
});