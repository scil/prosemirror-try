import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps'; //  for loading files with existing source maps. This plugin Inspired by webpack/source-map-loader. 
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: {
		file: 'public/main.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find 外部模块 in node_modules
		commonjs(), // converts 外部模块 to ES modules
             sourcemaps(), // 为了方便调试 prosemirror-state等的代码，就需要使用他们的map文件
		production && terser() // minify, but only in production
	]
};
