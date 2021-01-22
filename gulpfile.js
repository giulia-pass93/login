'use strict';
 
var gulp = require('gulp');    //Richiede l'utilizzo di gulp
var sass = require('gulp-sass');   //Richiede l'utilizzo di gulp sass
 
sass.compiler = require('node-sass');


gulp.task('sass', function () {    //Viene creato un task che si chiama "sass"
  return gulp.src('app/scss/**/*.scss')  //Prendere tutti i file .scss all'interno della cartella 
    .pipe(sass().on('error', sass.logError))   //Eseguire il plugin sass ed eventualmente esibire gli errori
    .pipe(gulp.dest('app/css/'));  //Se non ci sono errori inserire i file compilati all'interno della cartella .css
});

 
gulp.task('watch', function () {    
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});
       /*
        Task di watch che indica a gulp di rimanere in ascolto, 
        quindi se vengono modificati dei file all'interno della cartella .scss
        esegui il task 'sass'
        */