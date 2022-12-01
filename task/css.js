const {src, dest,} = require('gulp');


// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Плагины

const plumber = require('gulp-plumber');  // Для вывода ошибки
const notify = require('gulp-notify');  // Для всплывающего окна об ошибке
const concat = require('gulp-concat'); // Для обьединения в один файл CSS 
const cssimport = require('gulp-cssimport') // Для последовательного размещения CSS фыйлов
const autoprefixer = require('gulp-autoprefixer') // Автопрефиксер для CSS
const csso = require('gulp-csso') // Для зжатия CSS файла
const size = require('gulp-size')
const rename = require('gulp-rename') // Для полной версии CSS файла
const shorthand = require('gulp-shorthand') // Заменяет все возможные свойства на их краткие формы
const gruppCssMediaQueris = require('gulp-group-css-media-queries') // Собирает в одни стили все медиа запросы
const webpCss = require('gulp-webp-css')



// Обработка CSS
const css = () => {
    return src(path.css.src, { sourcemaps: isDev})
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(gruppCssMediaQueris())
    .pipe(size({title: "main.css"}))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: "main.min.css"}))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev}))
    
};


module.exports = css