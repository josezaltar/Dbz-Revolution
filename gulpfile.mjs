import gulp from "gulp";
import imagemin from "gulp-imagemin";
import * as sass from "sass"; // Correção na importação do sass
import gulpSass from "gulp-sass"; // Importando gulp-sass normalmente
import gulpCopy from "gulp-copy"; // Corrigido para importar o gulp-copy corretamente

// Passando o compilador para o gulp-sass
const sassCompiler = gulpSass(sass);

function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sassCompiler({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css")); // Alterado para public
}

function images() {
  return gulp
    .src(["./src/images/**/*"], { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images")); // Alterado para public
}

// Função para copiar o index.html para a pasta public
function copyIndexHtml() {
  return gulp.src("./index.html").pipe(gulpCopy("./dist", { prefix: 1 })); // Copia o index.html para a pasta public
}

// Exportando tarefas
export default gulp.parallel(styles, images, copyIndexHtml); // Adicionando copyIndexHtml aqui
export const watch = () => {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};
