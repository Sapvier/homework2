const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const prettier = require('gulp-prettier')
const csso = require('gulp-csso')
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin')
const img = require('gulp-imagemin')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')


function html() {
    return src('src/index.html')
        .pipe(include({
                prefix: '@@'
            }
        ))
        .pipe(htmlmin({}))
        .pipe(dest('dist'))
}
function scss() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(dest('dist'))
}
exports.html = html
exports.scss = scss