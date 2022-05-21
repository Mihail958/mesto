const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключаем плагин
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:  './src/pages/index.js',
    output: {
          filename: 'main.[hash].js',
          path: path.resolve(__dirname, 'dist'),
          clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin(),
      ],
    mode: 'development', // добавили режим разработчика
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
        ],
    },
    devServer: {
        compress: true,
        port: 8083,
        open: true
    }
};
  