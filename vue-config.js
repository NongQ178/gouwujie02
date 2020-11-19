module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //'@':'src'
                //这个已经默认配置过了
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                // 'router':'@/router',
                // 'store':'@/store',//这里就不需要了,因为这俩用的少
                'views': '@/views'
            }
        }
    }
}