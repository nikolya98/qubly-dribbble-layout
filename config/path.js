const SOURCE = `./src`;
const DIST = `./dist`;
const MODULES = "./node_modules";

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
  plugins: {
    jquery: `${MODULES}/jquery/dist/jquery.js`,
    wow: `${MODULES}/wow.js/dist/wow.js`,
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
