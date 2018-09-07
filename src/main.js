import { createPlugin } from "docz-core";

const defaultOptions = {};

export const svgSpriteLoader = (options = defaultOptions) =>
  createPlugin({
    modifyBundlerConfig: config => {
      const rule = config.module.rules.find(
        rule => rule.test.toString() === "/\\.(svg)(\\?.*)?$/"
      );

      rule.use = {
        loader: "svg-sprite-loader",
        options,
      };

      return config;
    }
  });
