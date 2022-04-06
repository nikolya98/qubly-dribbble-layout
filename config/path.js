const SOURCE = `./src`;
const DIST = `./dist`;

export const path = {
  root: {
    src: `${SOURCE}`,
    dist: `${DIST}`,
  },
  build: {
    html: `${DIST}`,
    css: `${DIST}/css`,
    js: `${DIST}/js`,
    img: `${DIST}/images`,
    fonts: `${DIST}/fonts`,
  },
  src: {
    html: [`${SOURCE}/*.html`, `!${SOURCE}/**/_*.html`],
    scss: `${SOURCE}/scss/style.scss`,
    js: `${SOURCE}/js/main.js`,
    img: `${SOURCE}/images/**/*.{jpg,jpeg,png,gif,ico,svg,webp,avif,heif}`,
    fonts: `${SOURCE}/fonts/**/*.ttf`,
  },
  watch: {
    html: `${SOURCE}/**/*.html`,
    scss: `${SOURCE}/scss/**/*.scss`,
    js: `${SOURCE}/js/**/*.js`,
    img: `${SOURCE}/images/**/*.{jpg,jpeg,png,gif,ico,svg,webp,avif,heif}`,
    fonts: `${SOURCE}/fonts/**/*.ttf`,
  },
  clear: `${DIST}`,
};
