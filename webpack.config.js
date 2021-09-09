const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = env => {
    console.log('Environment:', env.environment);

    const environment = env.environment;
    const isProduction = environment === 'production';
    const isDevelopment = environment === 'development';

    return {
        mode: environment,
        resolve: {
            extensions: ['.js', '.jsx', '.scss']
        },
        devServer: {
            host: 'localhost',
            port: 8080,
            historyApiFallback: true,
        },

        entry: [
            path.join(PATH_SOURCE, './index.js'),
        ],

        output: {
            path: PATH_DIST,
            filename: 'js/[name].[hash].js',
        },

        module: {
            rules: [
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    debug: false,
                                    useBuiltIns: 'usage',
                                    corejs: 3
                                }],
                                '@babel/preset-react'
                            ]
                        }
                    }
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: isDevelopment
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        isDevelopment ? 'style-loader': MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(PATH_SOURCE, './index.html')
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            })
        ]
    }
}