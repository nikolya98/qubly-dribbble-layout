import { src, dest } from "gulp";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";

import { path } from "../../config/path";

const images = () => {
  return src(path.src.img)
    .pipe(newer(path.build.img))
    .pipe(webp())
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(newer(path.build.img))
    .pipe(imagemin({ verbose: true }))
    .pipe(dest(path.build.img));
};

export default images;
