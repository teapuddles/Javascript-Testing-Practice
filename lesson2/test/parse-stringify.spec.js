// import the functions to test
const { parse, stringify } = require('../parse-stringify')
const assert = require('assert')

describe('The stringify function', () => {
    it('should stringify an object into a valid query string', () => {
        const actual = stringify({ by: 'Kevin-Gleeson' })
        const expected = 'by=Kevin-Gleeson'

        assert.equal(actual, expected)
    })
}) 