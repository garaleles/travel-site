const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-mixins'),
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'app'),
        },
        hot: true,
        port: 3000,
        liveReload: false

    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", {loader: "css-loader", options: {url: false}}, {
                    loader: "postcss-loader",
                    options: {postcssOptions: {plugins: postCSSPlugins}}
                }]

            }
        ]
    }
}