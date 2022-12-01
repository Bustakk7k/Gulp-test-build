const { watch, series, parallel } = require('gulp');
const brovserSync = require('browser-sync').create(); // live server
const del = require('del');
// Config
const path = require('./config/path.js')
const app = require('./config/app.js')

// Задачи
const html = require('./task/html.js')
const css = require('./task/css.js')
const scss = require('./task/scss.js')
const js = require('./task/js.js')
const img = require('./task/img.js')
const font =require('./task/font.js');
const { notify } = require('browser-sync');
// Сервер
const server = () => {
    brovserSync.init({
        server: {
            baseDir: path.root
        },
        notify: false
    })
}
// Для удаление паблика
const clean = ()=>{
    return del(path.root)
}
// Наблюдатель
const watcher = () => {
    watch(path.html.watch, html).on('all', brovserSync.reload),
    watch(path.scss.watch, scss).on('all', brovserSync.reload)
    watch(path.js.watch, js).on('all', brovserSync.reload)
    watch(path.img.watch, img).on('all', brovserSync.reload)
    watch(path.font.watch, font).on('all', brovserSync.reload)
}

// Задача Build для продакшена
 const build = series(
    clean,
    parallel(html, scss, js, img, font )
);  

// Для работы
const dev = series(
    build,
    parallel(watcher, server)
);  
// Задачи 
exports.html = html;
exports.watcher = watcher;
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.clean = clean;
// Сборка
exports.default = app.isProd
 ? build 
 : dev;
