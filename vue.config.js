module.exports = {
    devServer: {
        proxy: {
          '/post': {
            target: " https://cnodejs.org/api/v1",
            changeOrigin: true,
            pathRewrite: {
              "^/post": '',
            },
          }
        }
    }
}