import { src, dest } from "gulp";
import uglify from "gulp-uglify-es";
import concat from "gulp-concat";

import { path } from "../../config/path";

const script = () => {
  return src([path.plugins.jquery, path.plugins.wow, path.src.js], {
    allowEmpty: true,
    sourcemaps: true,
  })
    .pipe(concat(`main.min.js`))
    .pipe(uglify())
    .pipe(dest(path.build.js), { sourcemaps: true });
};

export default script;
