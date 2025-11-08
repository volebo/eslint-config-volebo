import neostandard from 'neostandard'
export default [...neostandard(), {
	rules: {
		'@stylistic/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'@stylistic/no-tabs': ['off', { allowIndentationTabs: true }],
	},
}]
