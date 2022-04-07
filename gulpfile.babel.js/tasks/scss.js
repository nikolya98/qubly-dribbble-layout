import { src, dest } from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import groupMedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
/* import webpcss from "gulp-webp-css"; */
import rename from "gulp-rename";

import { path } from "../../config/path";

const scss = gulpSass(dartSass);

const processScss = () => {
  return (
    src(path.src.scss, { allowEmpty: true, sourcemaps: true })
      .pipe(
        scss({
          outputStyle: "expanded",
        }).on("error", scss.logError)
      )
      /*     .pipe(webpcss()) */
      .pipe(groupMedia())
      .pipe(
        autoprefixer({
          cascade: true,
          grid: "autoplace",
          // TODO: set up condition for development or peoduction
          overrideBrowserslist: ["last 2 versions"],
        })
      )
      .pipe(cleanCss())
      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(dest(path.build.css, { sourcemaps: true }))
  );
};

export default processScss;
