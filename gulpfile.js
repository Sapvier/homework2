const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin')
const img = require('gulp-imagemin')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const concat = require('gulp-concat')
const sync = require('browser-sync').create()
const minify = require('gulp-minify');



function html() {
    return src('src/index.html')
        .pipe(include({
                prefix: '@@'
            }
        ))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
}
function scss() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('dist'))
}
function clear () {
    return del('dist')
}
function image () {
    return src('src/assets/**.svg')
        .pipe(img())
        .pipe(dest('dist/assets'))
}

function js () {
    return src('src/js/**.js')
        .pipe(concat('index.js'))
        .pipe(minify())
        .pipe(dest('dist'))
}

function serve() {
    sync.init({
        server: './dist'
    })
    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/js/**.js', series(js)).on('change', sync.reload)
    watch('src/parts/**.html', series(html)).on('change', sync.reload)
    watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
}


exports.build = series(clear, scss, image, js, html)
exports.serve = series(clear, scss, image, html, js, serve)
