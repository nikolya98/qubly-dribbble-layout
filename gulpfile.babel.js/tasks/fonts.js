import { src, dest } from "gulp";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

import { path } from "../../config/path";

const fonts = () => {
  return src(path.src.fonts)
    .pipe(newer(path.build.fonts))
    .pipe(fonter({ formats: ["woff", "ttf", "svg", "eot"] }))
    .pipe(dest(path.build.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts));
};

export default fonts;
