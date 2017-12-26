const path = require('path')
const sourcePath = path.join(__dirname, './lib');

const babelOptions = {
  "presets": "es2015"
};

module.exports = {
  entry: [
    `${sourcePath}/index.js`,
  ],
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './')
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8181,
    historyApiFallback: true,
  },
}
