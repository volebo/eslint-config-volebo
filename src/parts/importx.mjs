import pluginImportX from 'eslint-plugin-import-x'

export const plugins = {
	importX: pluginImportX,
}

export const config = [
	{
		name: 'volebo/import-x',
		plugins: {
			'import-x': pluginImportX,
		},
		rules: {
			'import-x/export': 'error',
			'import-x/first': 'error',
			'import-x/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
			'import-x/no-duplicates': 'error',
			'import-x/no-named-default': 'error',
			'import-x/no-webpack-loader-syntax': 'error',
		},
	},
]
