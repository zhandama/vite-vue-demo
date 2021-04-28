const path = require('path')
export default function () {
    return {
        // 代理，最重要，其他的都可以有默认配置
        proxy: {
            '/app': {
                target: 'http://www.hzminsu.cn',
                changeOrigin: true,
                pathRewrite: {'^/app' : ''}
            }
        },
        alias : {
            '/@/':  path.resolve(__dirname, './src')
        },
        // 端口
        port: 3000,
        // 是否自动开启浏览器
        open: false,
        // 开启控制台输出日志
        silent: false,
        // 哪个第三方的包需要重新编译
        optimizeDeps:[],

    }
}