import gulp from "gulp";
import imagemin from "gulp-imagemin";
import * as sass from "sass"; // Correção na importação do sass
import uglify from "gulp-uglify";
import gulpSass from "gulp-sass"; // Importando gulp-sass normalmente

// Passando o compilador para o gulp-sass
const sassCompiler = gulpSass(sass);

function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sassCompiler({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./public/css")); // Alterado para public
}

function images() {
  return gulp
    .src(["./src/images/**/*"], { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest("./public/images")); // Alterado para public
}

// Exportando tarefas
export default gulp.parallel(styles, images);
export const watch = () => {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};
