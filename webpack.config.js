const HtmlWebPackPlugin = require("html-webpack-plugin");

/**
 * Generates an HTML file with <script> injected, writes to dist/index.html, and minifies the file.
 */
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    // Creates style nodes from JS strings
                    {
                        loader: "style-loader"
                    },
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            // Compiles Less to CSS
            {
                test: /\.less$/,
                loader : 'style-loader!css-loader!less-loader'
            },
            // Bundles images and fonts
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [htmlPlugin]
};