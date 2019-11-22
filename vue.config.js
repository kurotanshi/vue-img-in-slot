const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.css'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    entry: './src/main.js',
  }
}