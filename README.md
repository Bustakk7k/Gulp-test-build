# Простая сборка Gulp без модулей ES

## Инструкция 
1. Скачать все файлы в любую директорию
2. Ввести в терменале команду npm i для установки всем модулей ( должен установлен быть Node.js)
3. Чтобы включить сборку нужно написать gulp в терменале
4. Использовать для работы
5. После создания и выкладывания для продакшена напишите gulp --production

## Установленые npm пакаты
[Gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp
[brovserSync](https://www.npmjs.com/package/browser-sync) Локальный сервер
[del](https://www.npmjs.com/package/del) Удаление dist папки (используеться версия 6.1.1)

### HTML
[gulp-plumber](https://www.npmjs.com/package/gulp-plumber) Для вывода ошибки
[gulp-notify](https://www.npmjs.com/package/gulp-notify) Для всплывающего окошка ошибки
[gulp-file-include](https://www.npmjs.com/package/gulp-file-include) Для вставки в основной файл остальных файлов
[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) минимизация HTML фыйла
[gulp-size](https://www.npmjs.com/package/gulp-size) Узнать сколько весит файл
[gulp-webp-html](https://www.npmjs.com/package/gulp-webp-html) 

### CSS, SCSS

[gulp-concat]https://www.npmjs.com/package/gulp-concat) Для обьединения в один файл CSS 
[gulp-cssimport](https://www.npmjs.com/package/gulp-cssimport) Для последовательного размещения CSS фыйлов
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автопрефиксер для CSS
[gulp-csso](https://www.npmjs.com/package/gulp-csso) Для зжатия CSS файла
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Для полной версии CSS файла
[gulp-shorthand](https://www.npmjs.com/package/gulp-shorthand) Заменяет все возможные свойства на их краткие формы
[gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) Собирает в одни стили все медиа запросы
[gulp-webp-css](https://www.npmjs.com/package/gulp-webp-css) 

[gulp-sass](https://www.npmjs.com/package/gulp-sass) 
[gulp-sass-glob](https://www.npmjs.com/package/gulp-sass-glob) Добавляет маски для Sass

### JS

[gulp-babel](https://www.npmjs.com/package/gulp-babel)  Для чтоения ES5 для старых браузеров
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Для минификации JS файла

###  Картинки, Шрифты
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Для минимизации размера картинок
[gulp-newer](https://www.npmjs.com/package/gulp-newer) Для проверки на уже зжатые файлы
[gulp-webp](https://www.npmjs.com/package/gulp-webp) для переформатирования в формат webp
[gulp-if](https://www.npmjs.com/package/gulp-if) 


[gulp-fonter](https://www.npmjs.com/package/gulp-fonter) Для переобразования шрифтов
[gulp-ttf2woff2](https://www.npmjs.com/package/gulp-ttf2woff2) Добавление ttf и woff2 форматов 

