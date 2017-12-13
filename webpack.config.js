const path = require('path')
const sourcePath = path.join(__dirname, './src');

module.exports = {
  entry: [
    `${sourcePath}/index.ts`,
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './')
  }
}
