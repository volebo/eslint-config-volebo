// it is an example of a valid Mocha test

import * as sinon          from 'sinon222'
import * as moduleForTests from './my-beautiful-library.mjs'


// #bugRuleMochaTopLevelHooks GL-17
// example of top level "tags" that kills no-top-level-before
tags(
	'slow',
	'ui',
).describe(fn2sn(import.meta), function () {

	let sbox1

	beforeEach(function () {
		sbox1 = sinon.createSandbox()
	})

	afterEach(function () {
		sbox1.restore()
	})


	it('should succeed', function () {

		const res = moduleForTests.fn('some test value')

		expect(res).to.be.null
	})

	tags(
		'performance',
	).describe('with big input', function () {

		const testCases = [1, 2, 'a']

		// dynamic tests with tags
		for (const tc of testCases) {

			tags(
				'need-db',
			).it(`should work with ${tc} input`, () => { // function () {

				const res = moduleForTests.fn('some test value')

				expect(res).to.be.null
			})
		}
	})
})
