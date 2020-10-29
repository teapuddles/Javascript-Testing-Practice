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