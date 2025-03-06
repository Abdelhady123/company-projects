const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');//جلب المسار الحالي الذي تتواجد فيه

module.exports = {
    entry:'./src/js/index.js',
    stats:'errors-only',
    output:{
        publicPath:'/',
        path:path.resolve(__dirname,'build'),
        filename:'js/bundle.js'
    },
    module: {
      // تحزيم الملفات css sass
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
                  {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                      publicPath:'../'
                    }
                  },
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        // تحزيم الصور
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
        //تحزيم الخطوط
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
              },
            },
          ],
        },
        // html loader
        // سيتعامل مع الملفات والصور التي تكون داخل html
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        //jquery
        {
          test: require.resolve("jquery"),
          loader: "expose-loader",
          options: {
            exposes: ["$", "jQuery"],
          },
        },
        ],
      },

      devServer: {
        static: {
          directory: path.join(__dirname, " build"),
        },
    
        port: 9000,
        hot: false, 
        open: true,
        devMiddleware: {
          writeToDisk: true,
        },
      },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};