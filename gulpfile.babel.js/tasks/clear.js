import del from "del";

import { path } from "../../config/path";

const clear = () => {
  return del(path.clear);
};

export default clear;
