import WebExtPlugin from "web-ext-plugin";
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

export default {
    entry: {
        content: './src/content/content.ts',
        background: './src/background/background.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: {
          '@witch': path.resolve(__dirname, 'src')
        }
    },

    plugins: [
        new WebExtPlugin({
            sourceDir: path.resolve(__dirname, 'dist'),
            target: "chromium",
            devtools: true,
            startUrl: ["https://www.wolfy.net/"],
        })
    ]
}