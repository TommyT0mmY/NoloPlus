const cssnano = require('cssnano');
const presetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    // Espande variabili CSS
    presetEnv({
      stage: 0,
      features: {
        'custom-properties': { preserve: false }, // sostituisce le variabili con i valori reali
      },
    }),
    // Minificazione aggressiva
    cssnano({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
        mergeRules: true,
        mergeLonghand: true,
        minifySelectors: true,
        reduceTransforms: true,
      }],
    }),
  ],
};
