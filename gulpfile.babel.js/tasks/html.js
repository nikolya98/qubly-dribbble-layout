import { src, dest } from "gulp";
import fileinclude from "gulp-file-include";
import webphtml from "gulp-webp-html";
import htmlmin from "gulp-htmlmin";

import { path } from "../../config/path";

const html = () => {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.build.html));
};

export default html;
