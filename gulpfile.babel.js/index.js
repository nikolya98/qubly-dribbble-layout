import { watch, series, parallel } from "gulp";
import browserSync from "browser-sync";

import server from "./tasks/server";
import clear from "./tasks/clear";
import html from "./tasks/html";
import scss from "./tasks/scss";
import script from "./tasks/scripts";
import images from "./tasks/images";
import fonts from "./tasks/fonts";

import { path } from "../config/path";

const watchFiles = () => {
  watch([path.watch.html], html).on("all", browserSync.reload);
  watch([path.watch.scss], scss).on("all", browserSync.reload);
  watch([path.watch.js], script).on("all", browserSync.reload);
  watch([path.watch.img], images).on("all", browserSync.reload);
  watch([path.watch.fonts], fonts).on("all", browserSync.reload);
};

const build = series(clear, parallel(html, scss, script, images, fonts));

const development = series(build, parallel(server, watchFiles));

export { server, clear, html, scss, script, images, fonts, build, development };

export default development;
