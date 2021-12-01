module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/gateway/admin_model/api/v1': {
        target: 'http://10.16.153.36:32463',
        changeOrigin: true
      },
      '/gateway/dvc_model/api/v1': {
        target: 'http://10.16.153.36:32463',
        changeOrigin: true
      },
      '/gateway/ck_model/api/v1': {
        target: 'http://10.16.153.36:32463', 
        changeOrigin: true
      },
      '/gateway/sale_model/api/v1': {
        target: 'http://10.16.153.36:32463', 
        changeOrigin: true
      }
    }
  }
}
