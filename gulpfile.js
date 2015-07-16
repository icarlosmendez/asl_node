'use strict';

/* =========== Require Modules =========== */

// express requirements to power browser-sync
 var express = require('express');
     var app = express();
    var http = require('http');
     
var

// utility modules
         del = require('del'),
        path = require('path'),
        gulp = require('gulp'),
      rename = require('gulp-rename'),
     plumber = require('gulp-plumber'),

// js testing
       babel = require('gulp-babel'),
   coveralls = require('gulp-coveralls'),
    istanbul = require('gulp-istanbul'),
       mocha = require('gulp-mocha'),

// js linting, concatenation, minification
      jshint = require('gulp-jshint'),
        jscs = require('gulp-jscs'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
//   browserify = require('gulp-browserify'),

// sass compilation, prefixing, minification
        sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
      cssmin = require('gulp-cssmin'),

// mapping for js and sass/css files
// easing troubleshooting in the browser
        maps = require('gulp-sourcemaps'),

// image minification
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),

// browser synchronization
 browserSync = require('browser-sync').create(),
      reload = require('browser-sync').reload;



/* =========== JS Testing tasks =========== */

var handleErr = function (err) {
  console.log(err.message);
  process.exit(1);
};

gulp.task('testlint', function () {
  return gulp.src([
      '**/*.js',
      'public/js/*.js',
      '!node_modules/**'
    ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(jscs())
    .on('error', handleErr);
});

gulp.task('pre-test', ['testlint'], function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function (cb) {
  var mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec', require: ['babel/register']}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('coveralls', ['test'], function () {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('babel', function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'));
});

gulp.task('tests', ['lint', 'test', 'coveralls']);


/* =========== General tasks =========== */

// JS
gulp.task('devlint', function() {
    return gulp.src([
        'app.js',
        'public/js/gps.js',
        'public/js/fb_login.js',
        'public/js/yelp.js',
        'routes/*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// gulp.task('concatScripts', ['devlint'], function() {
//     return gulp.src([
//             'public/js/vendor/jquery.min.js',
//             'public/js/fb_login.js',
//             'public/js/databse.js'
//             //'public/js/gps.js'
//             ])
//         .pipe(maps.init())
//         .pipe(concat('app.js'))
//         .pipe(maps.write('./'))
//         .pipe(gulp.dest('public/js'));

// });

// gulp.task('minifyScripts', ['concatScripts'], function() {
//     return gulp.src([
//         'public/js/fb_login',
//         'public/js/database.js',
//         'puclic/js/gps.js',
//         'public/js/app.js',
//         'routes/index.js',
//         'routes/users.js',
//         'app.js'
//         ])
//         .pipe(uglify())
//         .pipe(rename('app.min.js'))
//         .pipe(gulp.dest('public/js'));
// });

gulp.task('devScripts', ['devlint']);


// SASS
gulp.task('compileSass', function() {
    return gulp.src('public/scss/main.scss')
        .pipe(maps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(rename('main.css'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('prefix', ['compileSass'], function() {
    return gulp.src('public/css/main.css')
        .pipe(maps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('cssmin', ['prefix'], function() {
    return gulp.src('public/css/main.css')
        .pipe(cssmin())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('public/css'))
})

gulp.task('devStyles', ['cssmin'], function() {

})


// IMG
gulp.task('imageOp', function () {
    return gulp.src('public/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./public/img/opt'));
});

/* =========== Development Tasks =========== */

// var server = http.createServer(app).listen(3000);

// // get port from environment and save as port for use by browser sync
// var port = process.env.PORT || '3000';
// var addr = process.env.IP;
// // var route = '/bin/www';
// var bind = typeof addr === 'string'
//     ? 'pipe ' + addr
//     : 'port ' + addr.port;

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         open: true,
//         // proxy: route,
//         notify: false,
//         port: port,
//         host: addr,
//         server: {
//             baseDir: './bin',
            
//         }
//     });
// });

// gulp.task('watch', ['browser-sync'], function() {
//     return gulp.watch('public/scss/**/*.scss', ['compileSass']).on("change", [reload]);
//     return gulp.watch('public/js/main.js', ['concatScripts']).on("change", [reload]);
//     return gulp.watch("public/views/*.ejs").on("change", [reload]);
// });

// gulp.task('serve', ['watch']);


/* =========== Deployment tasks =========== */

gulp.task('build', ['devScripts', 'devStyles', 'imageOp'], function() {
    return gulp.src([
      'public/css/main.min.css',
      'public/js/app.min.js',
      'public/img/opt/**',
      'public/fonts/**'
      ], {base: './'})
        .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
    del(['build', 'coverage', 'public/img/opt', 'public/css/*.css*', 'public/js/app*.js*']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
