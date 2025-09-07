// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: isProd ? '/Hillel-HW-25.1/' : '/', // <-- ключевая строка
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
                },
            },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        ],
    },
    resolve: { extensions: ['.js', '.jsx'] },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        static: { directory: path.join(__dirname, 'public') },
        // (не обязательно) можно явно задать:
        // devMiddleware: { publicPath: '/' },
    },
    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
