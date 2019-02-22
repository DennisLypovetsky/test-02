/* global module */

let config = {
  "notGetBlocks": [
    "blocks-demo.html"
  ],
  "ignoredBlocks": [
    "no-js"
  ],
  "alwaysAddBlocks": [
    "sprite-svg",
    "sprite-png",
    // "object-fit-polyfill",
  ],
  "addStyleBefore": [
    "src/scss/variables.scss",
    "src/scss/mixins.scss",
    "src/scss/fonts.scss"
  ],
  "addStyleAfter": [
    // "src/scss/print.scss"
  ],
  "addJsBefore": [],
  "addJsAfter": [
    "./script.js"
  ],
  "addAssets": {
    // "src/fonts/montserrat-v12-cyrillic_latin-300.woff": "fonts/",
    // "src/fonts/montserrat-v12-cyrillic_latin-300.woff2": "fonts/",
    // "src/fonts/montserrat-v12-cyrillic_latin-700.woff": "fonts/",
    // "src/fonts/montserrat-v12-cyrillic_latin-700.woff2": "fonts/",
    // "src/fonts/montserrat-v12-cyrillic_latin-900.woff": "fonts/",
    // "src/fonts/montserrat-v12-cyrillic_latin-900.woff2": "fonts/",
    // "src/fonts/montserrat-v12-cyrillic_latin-regular.woff": "fonts/",
    // "src/fonts/montserrat-v12-cyrillic_latin-regular.woff2": "fonts/",
    // "src/fonts/open-sans-v15-cyrillic_latin-700.woff": "fonts/",
    // "src/fonts/open-sans-v15-cyrillic_latin-700.woff2": "fonts/",
    // "src/fonts/open-sans-v15-cyrillic_latin-regular.woff": "fonts/",
    // "src/fonts/open-sans-v15-cyrillic_latin-regular.woff2": "fonts/",
    "src/fonts/*.{woff,woff2}": "fonts/",
    "src/img/demo-*.{png,svg,jpg,jpeg}": "img/",
    // "src/favicon/*.{png,ico,svg,xml,webmanifest}": "img/favicon",
  },
  "dir": {
    "src": "src/",
    "build": "build/",
    "blocks": "src/blocks/"
  }
};

module.exports = config;
