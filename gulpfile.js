let gulp = require('gulp');
let sass = require('gulp-sass');
let minify = require('gulp-csso');
let compressJS = require('gulp-terser');
let browserSync = require('browser-sync').create();
let addPrefixes = require('gulp-autoprefixer');
let babel = require('gulp-babel');



gulp.task("compile", function() {
    return gulp.src("./styles/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(minify())
        .pipe(addPrefixes({
            overrideBrowserslist: ['last 2 versions', 'not dead', '> 0.2%'],
            cascade: false
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());

});

gulp.task("compressJS", function() {
    return gulp.src("./js/**/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(compressJS())
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
})

gulp.task('reload', gulp.series("compile", "compressJS", function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./styles/**/*.scss", gulp.series("compile"));
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', gulp.series("compressJS"));
}));


gulp.task("default", gulp.series("reload"), function() {});