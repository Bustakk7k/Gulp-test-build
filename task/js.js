const {src, dest,} = require('gulp');


// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Плагины

const plumber = require('gulp-plumber');  // Для вывода ошибки
const notify = require('gulp-notify');  // Для всплывающего окна об ошибке
const babel = require('gulp-babel'); // Для чтоения ES5 для старых браузеров
const uglify = require('gulp-uglify'); // Для минификации JS файла


// Обработка JavaScript
const js = () => {
    return src(path.js.src, { sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev}))
    
};

module.exports = js