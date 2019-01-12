const env = require("./.env-config.js");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["transform-define", env],
    [
      "babel-plugin-styled-components",
      { ssr: true, displayName: true, preprocess: false }
    ],
    [
      "import",
      {
        libraryName: "antd",
        style: "css"
      }
    ]
  ]
};
