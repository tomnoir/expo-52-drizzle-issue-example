const path = require('path')



/** @type {import("@babel/core").ConfigFunction} */
module.exports = function (api) {
  api.cache.forever()
  return {
    presets: [
      "babel-preset-expo",
    ],
    plugins: [["inline-import", { "extensions": [".sql"] }]]
  }
}