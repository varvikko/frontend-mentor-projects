const gulp = require('gulp')
const stylus = require('gulp-stylus')
const browserSync = require('browser-sync')

async function compile() {
  gulp.src('styles/**/*.styl')
    .pipe(stylus({ paths: ['node_modules', 'styles/globals'] }))
    .pipe(gulp.dest('css'))
}

gulp.task('stylus:compile', compile)

gulp.task('serve', () => {
  browserSync.init({ server: './' })

  gulp.watch('./**/*.styl').on('change', compile)
  gulp.watch('./**/*').on('change', browserSync.reload)
  gulp.watch('index.html').on('change', browserSync.reload)
})

