const {src, dest,} = require('gulp');


// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Плагины

const plumber = require('gulp-plumber');  // Для вывода ошибки
const notify = require('gulp-notify');  // Для всплывающего окна об ошибке
const autoprefixer = require('gulp-autoprefixer') // Автопрефиксер для SCSS
const csso = require('gulp-csso') // Для зжатия SCSS файла
const size = require('gulp-size')
const rename = require('gulp-rename') // Для полной версии SCSS файла
const gruppCssMediaQueris = require('gulp-group-css-media-queries') // Собирает в одни стили все медиа запросы
const sass = require('gulp-sass')(require ('sass')) // Подключаем задачу SASS и передаем компилятор
const sassGlob = require('gulp-sass-glob') // Добавляет маски для Sass
const webpCss = require('gulp-webp-css')

// Обработка SCSS
const scss = () => {
    return src(path.scss.src, { sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(gruppCssMediaQueris())
    .pipe(size({title: "main.css"}))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: "main.min.css"}))
    .pipe(dest(path.scss.dest, { sourcemaps: true}))
    
};


module.exports = scss
