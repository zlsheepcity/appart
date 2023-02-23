const path = require('node:path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')
const CopyWebPackPlugin = require("copy-webpack-plugin")

//nom: adsf
module.exports = (env) =>{
  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      publicPath: '/',
      filename: './bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
      alias: {
        Auth: path.resolve(__dirname, 'src/auth/'),
        Data: path.resolve(__dirname, 'src/data/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
        Interfaces: path.resolve(__dirname, 'src/interfaces/'),
        Routes: path.resolve(__dirname, 'src/routes/'),
        Utils: path.resolve(__dirname, 'src/utils/'),
        Pages: path.resolve(__dirname, 'src/pages/'),
        Src: path.resolve(__dirname, 'src/')
      },
    },
    plugins: [
      new DotenvPlugin({ path:'./.env' }),
      new CopyWebPackPlugin({ patterns:[{from:'public'}] }),
      new HtmlWebPackPlugin({
        title: 'PMP risku novērtēšanas un vadīšanas pārlūks',
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(ts|js|tsx|jsx|mjs|css)$/,
          use: "source-map-loader",
        },
        {
          test: /\.([cm]?ts|tsx)$/,
          loader: 'ts-loader'
        },
        {
          test:/\.css$/,
          use:['style-loader', 'css-loader']
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
  }
}
