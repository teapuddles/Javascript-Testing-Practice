// imported 
const practice = require('../practice')
const assert = require('assert')

// structure test with describe
describe('the practice function', () => {
    it('adds two numbers', () => {
        const actual = practice(1, 3)
        const expected = 4

        assert.equal(actual, expected)
    })
})

// In this lesson we're installing a test runner called Mocha
// we use npm init -y to create a new package.json file
// then we npm install mocha 

// after this we need to go into the json file:::
// in this section we are going to add mocha to our test script on line 7
// this will have mocha run all of the files in the test folder with npm test
