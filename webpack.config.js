const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {

	mode: 'development', // webpack --mode=production

	entry: { // string | object | array
		app: "./src/index.js",
		/* 多页面配置
		pageOne: './src/pageOne/index.js',
		pageTwo: './src/pageTwo/index.js',
		pageThree: './src/pageThree/index.js'
	  */
	},

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, 'build')
	},

	// module: {
	// 	rules: [{
	// 		test: /\.js|jsx$/,
	// 		use: ['babel-loader'],
	// 		exclude: /(node_modules|bower_components)/,
	// 		options: {
	// 			presets: ["env"]
	// 		}
	// 	}]
	// },
	module: {
		rules: [{
			test: /\.js|jsx$/,
			use: ['babel-loader'],
			exclude: /(node_modules|bower_components)/
		}]
	},

	devServer: {
		//告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先
		contentBase: path.join(__dirname, "public"),
		//当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
		historyApiFallback: true,
		// 一段处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台
		inline: true,
		//启用 webpack 的模块热替换特性
		hot: true,
		//指定要监听请求的端口号：
		port: 3000,
		//proxy 代理配置
		//proxy: {
		//  "/api": "http://localhost:3000"
		//}
	},

	devtool: 'inline-source-map',

	plugins: [
		new HtmlWebpackPlugin({
			title: 'React App',
			filename: 'index.html',
			template: 'public/index.html',
			// favicon: 'public/favicon.ico',
			inject: true,
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true //删除空白符与换行符
			}
		})
	]
}
module.exports = config
