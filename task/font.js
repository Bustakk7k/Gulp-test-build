const {src, dest,} = require('gulp');


// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Плагины

const plumber = require('gulp-plumber');  // Для вывода ошибки
const notify = require('gulp-notify');  // Для всплывающего окна об ошибке
const newer = require('gulp-newer'); // Для проверки на уже зжатые файлы
const fonter = require('gulp-fonter'); // Для переобразования шрифтов
const ttf2woff2 = require('gulp-ttf2woff2');



// Обработка Fonts
const font = () => {
    return src(path.font.src)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(newer(path.font.dest))
    .pipe(fonter({
        formats:["ttf" ,"woff","eot","svg"]
    }))
    .pipe(dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest))
};

module.exports = font