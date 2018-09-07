import { uglify } from "rollup-plugin-uglify";

export default {
  output: {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
    name: 'docz-plugin-svg-sprite-loader',
  },
  plugins: [
    uglify()
  ]
};