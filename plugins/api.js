export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*',
          
        //   changeOrigin: true,
        //   pathRewrite: {'^/api/': ''},
        }
      },
    //   proxy : true,
    //   proxy: {
    //     '/api/': { target: 'http://172.9.1.63/api/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
    //   }

    })
  
    // Set baseURL to something different
    // api.setBaseURL('http://172.9.1.63')
    // api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  
    // Inject to context as $api
    inject('apirsds', api)
  }