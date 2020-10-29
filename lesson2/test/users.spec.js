const { findUserByEmail, findUserById } = require('../users')
const assert = require('assert')
 
describe('The findUserByEmail function', () => {
    // done is a callback that notifies the test runner that the tests are done running
    it('finds a user by their email', done => {
        // to check to see if it's done, we use .then (just like in a fetch!)
       findUserByEmail('bahdcoder@gmail.com').then(response => {
        // assertions go here
        assert.equal(response.message, 'User found successfully.')
        // invoke the done function here so the test knows the async is finished. 
        done()
       }) 
    })       
})


// the below will error because the promise isn't matching the created object
// the resolve will have an object, but now it's not the correct one. 
// this is due to the functions being asynchronous
// they have timeouts and promises, which make them so. 
//  describe('The findUserByEmail function', () => {
//      it('finds a user by their email', () => {
//          const actual = findUserByEmail('bahdcoder@gmail.com')
//          const expected = {
//              message: 'User found successfully.'
//          }
//          assert.equal(actual, expected)         
//      })
//  })

// ====================================================
// A second way to test an async function is to 
// return a promise from the it function

// when you return a promise from a test (jest jasmine mocha), the test
// runner will wait for the promise to resolve before ending the test
// when you use the done function, it waits until you call done. 
describe ('The findUserByEmail function', () => {
    it('finds a user by email (Using the return promise method)', () => {
        return findUserByEmail('bahdcoder@gmail.com').then((response) => {
            assert.equal(response.message, 'User found successfully.')
        })
    })
})

// =====================
// A final way to test async functions is to use async await

describe ('The findUserByEmail function', () => {
    it('finds a user by email (using async/await)', async() => {
        const response = await findUserByEmail('bahdcoder@gmail.com')
        // waits for the promise to resolve before moving to the assertion
        assert.equal(response.message, 'User found successfully.')
    })
})