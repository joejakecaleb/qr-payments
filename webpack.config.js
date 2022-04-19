const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, 'client', 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const { NODE_ENV = 'production' } = process.env;
const isDev = NODE_ENV.includes('dev');

module.exports = {
  mode: isDev ? 'development' : 'production',
  watch: isDev, 
  entry: {
    app: path.resolve(SRC_DIR, 'index.js'),
  },
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', { runtime: 'automatic' }], 
              ['@babel/preset-env'],
            ]
          }
        }
      },
      {
        test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
      }
    ]
  }, 
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(SRC_DIR, 'index.html')
    })
  ]
};