# docz-plugin-svg-sprite-loader

Allows you to use [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) in your Docz config.

This currently replaces all other svg loaders.

## Install

```bash
$  yarn add docz-plugin-svg-sprite-loader
```

## Usage

```js
import { svgSpriteLoader } from 'docz-plugin-svg-sprite-loader';

export default {
  plugins: [svgSpriteLoader()],
};
```

## Options

Options can be passed into the function as the first argument. See [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) for the fill list of options.

```js
import { svgSpriteLoader } from 'docz-plugin-svg-sprite-loader';

export default {
  plugins: [svgSpriteLoader({
    symbolId: 'icon-'
  })],
};
```