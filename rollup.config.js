import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import styles from 'rollup-plugin-styles'
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
		styles({
			mode: 'extract',
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
