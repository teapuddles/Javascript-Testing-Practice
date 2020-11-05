const { findUserByEmail, findUserById } = require('../users')
// const assert = require('assert')
 
describe('The findUserByEmail function', () => {
    // done is a callback that notifies the test runner that the tests are done running
    it('finds a user by their email', done => {
        // to check to see if it's done, we use .then (just like in a fetch!)
       findUserByEmail('bahdcoder@gmail.com').then(response => {
            // jest
            expect(response.message).toEqual('User found successfully.')
        // assertions go here
        // assert.equal(response.message, 'User found successfully.')
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
            // jest, note that the return promise method and the done method use .toEqual and .toBe 
            expect(response.message).toBe('User found successfully.')
            // assert.equal(response.message, 'User found successfully.')
        })
    })
})

// =====================
// A final way to test async functions is to use async await

describe ('The findUserByEmail function', () => {
    it('finds a user by email (using async/await)', async() => {
        const response = await findUserByEmail('bahdcoder@gmail.com')
        // jest
        expect(response.message).toBe('User found successfully.')
        // waits for the promise to resolve before moving to the assertion
        // assert.equal(response.message, 'User found successfully.')
    })
    it('rejects and posts error if user with email isnt found.', () => {
        // Jest Rejection
        const actual = findUserByEmail('x@y.com')

        expect(actual).rejects.toEqual(new Error('User with email: x@y.com was not found.'))
        // Mocha Method for Rejection Below

        // // to test rejected promises, use the RETURN PROMISE METHOD
        // return findUserByEmail('x@y.com').then(() => {
        //     // .then takes in two parts, Fullfilled and Rejected. Because this promise isn't
        //     // supposed to resolve, we are going to assert a failure.
        //     assert.fail('Expected findUserByEmail function to reject')
        // }, error => {
        //     // the error here is the second argument for our .then
        //     assert.equal(error.message, 'User with email: x@y.com was not found.')
        // })
    })
})

describe('The findUserById function', () => {
    it('should find a user by id', async () => {
        const response = await findUserById(1)
        // jest
        expect(response.message).toBe('User found successfully.')
        // assert.equal(response.message, 'User found successfully.') 
    })
    it('rejects and posts error if user with id is not found', () => {
        // Jest Rejection
        const actual = findUserById(10)

        expect(actual).rejects.toEqual(new Error('User with id: 10 was not found.'))
       
        // Mocha Rejection

        // return findUserById(10).then(() => {
        //     assert.fail('Expected findUserById function to reject')
        // }, error => {
        //     assert.equal(error.message, 'User with id: 10 was not found.')
        // })
    })
})

// MAKE SURE YOUR TEST ASSERTIONS ARE SUCCESSFUL!``