// imported 
const practice = require('./practice')
const assert = require('assert')

const result = practice(1, 3)
const expected = 4

assert.equal(result, expected)

// if (result === 4){
//     console.log("all tests pass")
// } else {
//     throw new Error('Expected 1 + 3 to equal 4')
// }