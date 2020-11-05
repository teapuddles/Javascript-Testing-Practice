// import the functions to test
const { parse, stringify } = require('../parse-stringify')
// const assert = require('assert')

describe('The stringify function', () => {
    it('should stringify an object into a valid query string', () => {
        const actual = stringify({ by: 'Kevin-Gleeson' })
        const expected = 'by=Kevin-Gleeson'

        expect(actual).toBe(expected)
        // assert.equal(actual, expected)
    })
}) 

describe('The parse function', () => {
    it('should parse a query String into an object', () => {
        const actual = parse('?by=Kevin-Gleeson')
        const expected = { by: 'Kevin-Gleeson'}

        expect(actual).toEqual(expected)
        // assert.deepEqual(actual, expected)
    })
})

// Testing Asynchronous Functions 
