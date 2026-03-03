import pluginMocha         from 'eslint-plugin-mocha'
import globals             from 'globals'
import pluginChaiFriendly  from 'eslint-plugin-chai-friendly'


export const plugins = {
	mocha: pluginMocha,
}

export const config = [
	// pluginMocha.configs.flat.all,   //  to enable all
	pluginMocha.configs.recommended,
	{
		name: 'volebo/mocha',

		files: [
			'**/*.test.js',
			'**/*.test.mjs',
			'**/*.test.cjs',
			'**/*.spec.js',
			'**/*.spec.cjs',
			'**/*.spec.mjs',
		],

		languageOptions: {
			globals: {
				...globals.mocha,
				...globals.chai,

				'chaiFile': true,
				'filename2suitename': true,
				'filename2suitenameCjs': true,
				'filename2suitenameEsm': true,
				'fn2sn': true,
				'tags': true,
			},
		},

		plugins: {
			'chai-friendly': pluginChaiFriendly,
		},

		rules: {
			// in mocha tests there are a lot of `describe` and `it`
			// so actual tests are on 4th of 5th or 6th level of nested
			// callbacks. Thus: relaxing the rule:
			'max-nested-callbacks': ['warn', { 'max': 8 }],

			// -----------------------------------------------------------------
			// mocha
			// -----------------------------------------------------------------

			'mocha/no-mocha-arrows': ['warn'],

			// there is a problem with this rule: we generate the "top level"
			// test name (in `describe`) using filename. I _could_ consider
			// breaking the top level decribe call into two lines:
			// - get name
			// - call describe
			// but ATM it is easier for me to disable this rule completely
			//
			// another reason: we use dynamically generated tests:
			// https://mochajs.org/#dynamically-generating-tests
			// TODO: consider turning on , or looking for an alternative
			'mocha/no-setup-in-describe': ['off'],

			// chaiJS has expressions like:
			//
			// 		expect(act).is.null
			//
			// but original eslint's 'no-unused-expressions' raise an error.
			// in order to keep the rule working, but with chai-expressions
			// this plugin is added:
			'no-unused-expressions': ['off'],
			'chai-friendly/no-unused-expressions': ['error', {
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			}],

			// TODO: enable it when mocha-plugin will be able to support construcitons `tags().describe('', fn() { before...`
			// #bugRuleMochaTopLevelHooks GL-17
			'mocha/no-top-level-hooks': ['off'],
		},
		settings: {
			'mocha/additionalCustomNames': [
				{ name: 'tags()', type: 'suite',    interface: 'BDD' },
				{ name: 'tags()', type: 'suite',    interface: 'TDD' },
				{ name: 'tags()', type: 'suite',    interface: 'exports' },

				{ name: 'tags()', type: 'testCase', interface: 'BDD' },
				{ name: 'tags()', type: 'testCase', interface: 'TDD' },
				{ name: 'tags()', type: 'testCase', interface: 'exports' },
			],
		},
	},
]
