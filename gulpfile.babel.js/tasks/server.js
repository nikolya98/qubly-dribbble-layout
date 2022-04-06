import browsersync from "browser-sync";
import { path } from "../../config/path";

const server = () => {
  browsersync.init({
    server: {
      baseDir: path.root.dist,
    },
    port: 3000,
    notify: false,
  });
};

export default server;
