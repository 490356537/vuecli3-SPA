const config = require("./src/api/serve_or_build");  // proxy 配置接口
let proxy = [];
for (let item of config.PROXYSAPI) {
    proxy = proxy.concat({
        [item.module_name]: {//代理api
            target: item.module_url,//服务器api地址
            changeOrigin: false,//是否跨域
            ws: true, // proxy websockets
            pathRewrite: {
                [`^${item.module_name}`]: [item.module_name]//需要rewrite的
            }
        }
    });
}
module.exports = {
    runtimeCompiler: true,
    //runtimeCompiler: true,
    publicPath: "./", // 配置基本url
    devServer: {
        //disableHostCheck: true,
        open: true, //运行打开浏览器
        inline: true, //开启页面自动刷新
        proxy: proxy[0]
    },

    /* px 转换 rem 配置*/
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
};
