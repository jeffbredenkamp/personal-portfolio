var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require( 'gulp-dart-sass' );
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

// Scss Production Build
gulp.task('prod-build', function(done) {
    gulp.src('./src/scss/main.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind( console ))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'))
    done();
});

// Scss Development Build
gulp.task('dev-build', function(done) {
    gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true
        }))
        .pipe(sourcemaps.write('.'))
        .on('error', console.error.bind( console ))
        .pipe(gulp.dest('./dist/css/'))
    done();
});

// JS Minify
gulp.task('minifyjs', function (done) {
    gulp.src('./src/js/main.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js/'))
    done();
  });

//optimize images
gulp.task('minifyimg', async function(done) {
    gulp.src('./src/img/*.{png}')
    .pipe(imagemin([
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 2 }),
      ]))
    .pipe(gulp.dest('./dist/img/'))
    done();
});

// Production Build Series
gulp.task('default', gulp.series('prod-build', 'minifyimg', 'minifyjs'));