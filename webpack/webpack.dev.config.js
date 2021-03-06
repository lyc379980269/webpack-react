const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = merge(baseConfig, {
    entry: [
        path.resolve(process.cwd(), "src/index.js")
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    //配置
    plugins: [
        new HtmlWebpackPlugin({
            inject: true, //js包自动注入html
            template: "src/index.html"
        }),

        //循环引用相关
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: false //如果有则显示警告即可
        })
    ],

//该项可以忽略哈，只管加上去
    performance: {
        hints: false
    }
});