process.env.VUE_APP_VERSION = process.env.npm_package_version

module.exports = {
    productionSourceMap: false,
    transpileDependencies: ['vuetify'],
    devServer: {
        /**
         * For e2e testing we turn this off using vue cli --mode e2e
         * @link https://cli.vuejs.org/guide/mode-and-env.html#modes
         */
        https: !process.env.USE_HTTP,
        port: 5000,
    },
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 600 * 1000,
                maxSize: 2000 * 1000,
            },
        },
        resolve: {
            symlinks: false,
        },
    },
    pwa: {
        name: 'Flare Wallet',
        manifestOptions: {
            start_url: '/',
        },
        workboxOptions: {
            exclude: [/_redirects/, /_headers/],
        },
        iconPaths: {
            favicon16: 'img/icons/favicon-16x16.png',
            favicon32: 'img/icons/favicon-32x32.png',
            appleTouchIcon: 'img/icons/apple-touch-icon.png',
            maskIcon: 'img/icons/favicon-32x32.png',
            msTileImage: 'img/icons/mstile-150x150.png',
        },
    },
}