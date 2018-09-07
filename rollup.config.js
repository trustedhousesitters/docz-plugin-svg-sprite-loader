import babel from "rollup-plugin-babel";

import cjsConf from "./rollup/config.cjs";
import esmConf from "./rollup/config.esm";

const baseConf = {
  input: "src/main.js",
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
  ],
  external: ['docz-core']
};

const cjsConfig = {
  ...baseConf,
  ...cjsConf,
  plugins: [
    ...baseConf.plugins,
    ...cjsConf.plugins
  ]
};

const esmConfig = {
  ...baseConf,
  ...esmConf
};

export default [cjsConfig, esmConfig];
