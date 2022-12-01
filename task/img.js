const {src, dest,} = require('gulp');


// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Плагины

const plumber = require('gulp-plumber');  // Для вывода ошибки
const notify = require('gulp-notify');  // Для всплывающего окна об ошибке
const imagemin = require('gulp-imagemin'); // Для минимизации размера картинок
const newer = require('gulp-newer'); // Для проверки на уже зжатые файлы
const webp = require('gulp-webp'); // для переформатирования в формат webp
const gulpif = require('gulp-if')

// Обработка Images
const img = () => {
    return src(path.img.src)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpif(app.isProd, imagemin({verbose: true})))
    .pipe(dest(path.img.dest))
};

module.exports = img