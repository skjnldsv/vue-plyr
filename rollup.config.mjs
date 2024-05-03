import { nodeResolve } from '@rollup/plugin-node-resolve'
import { resolve } from 'node:path'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'

const external = [
	'vue-plyr',
	'vue',
]

export default {
	input: './lib/index.js',
	external,
	plugins: [
		nodeResolve(),
		vue(),
		commonjs(),
		postcss({
			// Or with custom file name
			extract: resolve('dist/vue-plyr.css'),
		}),
	],
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
			sourcemap: true,
			assetFileNames: 'vue-plyr[extname]',
			exports: 'default',
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm',
			sourcemap: true,
			assetFileNames: 'vue-plyr[extname]',
		},
	],
}
