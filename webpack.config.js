const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  mode: "production",
  entry: {
    path: path.join(__dirname, './src/lib/cron.vue')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: [
          "es2015",
          "stage-2"
        ] 
      }
    },
    {
        test: /\.vue$/,
        use: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
}
