const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'    
        })
    ],
    module: {
        rules: [
            {   
                // test all the files with .js as end
                test: /\.js$/,
                exclude: /node_modules/,
                // use babel-loader 
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};