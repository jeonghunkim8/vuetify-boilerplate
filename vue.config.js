const { argv } = require('yargs');

console.log('server:', process.env.VUE_APP_SERVER);
if(argv['base-api-url']) {
    //VUE_APP_BASE_API_URL 을 파라미터에서 받은 값으로 셋팅함.
    process.env.VUE_APP_BASE_API_URL=argv['base-api-url'];
}

module.exports = {
    filenameHashing: false,
    //서버 환경이 있을 경우, dist.local <-- 형식으로 빌드함.
    outputDir: process.env.VUE_APP_SERVER ? `./dist-${process.env.VUE_APP_SERVER}/` : `./dist/`,

    // assetsDir: './',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
            console.log('production...');
            return {
                output: {
                    filename: 'js/[name].[hash].js',
                    chunkFilename: 'js/[name].[chunkhash].js'
                }
            }
        } else {
            // mutate for development...
            console.log('developemnt...');
            return {
                devServer: {
                    // port:8081,
                    // proxy: {
                    //     '/api/v1': {
                    //         target: 'http://localhost:8080',
                    //         ws: true,
                    //         changeOrigin: true
                    //     }
                    // }
                },
            }
        }
    },

    css: {
        loaderOptions: {
            sass: {
              data: '@import "@/variables.scss";'
            },
        }
    },

    baseUrl: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined
}