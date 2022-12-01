const {src, dest,} = require('gulp');


// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Плагины

const plumber = require('gulp-plumber');  // Для вывода ошибки
const notify = require('gulp-notify');  //
const fileInclude = require('gulp-file-include'); // Для вставки в основной файл остальных файлов
const htmlmin = require('gulp-htmlmin'); // минимизация HTML
const size = require('gulp-size'); // Узнать сколько весит файл
const webpHtml = require('gulp-webp-html'); 

// Обработка HTML
const html = () => {
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({title: 'До сжатия'}))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({title: 'После зжатия'}))
    .pipe(dest(path.html.dest))
};


module.exports = html