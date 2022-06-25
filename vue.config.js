module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/covid-19/' : './',
  lintOnSave: false, // 关掉代码校验
  devServer: {
    port: 8999,
    open: true,
  },
}
