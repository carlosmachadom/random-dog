const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: "./public/js/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: [".js"],
        alias: {
            '@app': path.resolve(__dirname, 'src'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@templates': path.resolve(__dirname, 'src/templates'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@helpers': path.resolve(__dirname, 'src/helpers/'),
            '@scripts': path.resolve(__dirname, 'src/scripts/'),
            '@styles': path.resolve(__dirname, 'public/styles/'),
            '@assets': path.resolve(__dirname, 'public/assets/'),
            '@fonts': path.resolve(__dirname, 'public/assets/fonts/'),
            '@images': path.resolve(__dirname, 'public/assets/images/')
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash][ext][query]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[hash][ext][query]',
                },
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/html/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),
        new DotEnv(),
        new FaviconsWebpackPlugin('./public/assets/images/paw.png'),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        static:
        {
            directory: path.join(__dirname, "dist"),
            watch: true,
        },
        watchFiles: path.join(__dirname, "./**"),
        compress: true,
        historyApiFallback: true,
        port: 8080,
        open: true,
    },
}