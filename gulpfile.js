var gulp = require('gulp');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var bower = require('gulp-bower');

//script paths
var jsFiles = [
  '!src/app/config/config.js-*',
  'src/app/**/*.js'
];
var jsDest = 'build';

// Tarefa padrão quando executado o comando GULP
gulp.task('default',['bower','scripts']);

/** Baixa dependencias do bower **/
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('bower_components/'))
});

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('bundle.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest(jsDest))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        ;
});

// Tarefa de monitoração caso algum arquivo seja modificado, deve ser executado e deixado aberto, comando "gulp watch".
gulp.task('watch', function() {
    gulp.watch(jsFiles, ['scripts']);
});