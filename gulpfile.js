const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const prettier = require('gulp-prettier')
const csso = require('gulp-csso')
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin')
const img = require('gulp-imagemin')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const ghPages = require('gulp-gh-pages');


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
function deploy() {
    return src('./dist/**/*')
        .pipe(ghPages({
            branch: 'gulp-initialize',
            push: true
        }));
}



exports.html = html
exports.scss = scss
exports.deploy = deploy