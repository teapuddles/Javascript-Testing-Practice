// imported 
const practice = require('./practice')

const result = practice(1, 3)

if (result === 4){
    console.log("all tests pass")
} else {
    throw new Error('Expected 1 + 3 to equal 4')
}