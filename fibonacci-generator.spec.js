/*eslint-disable
space-before-function-paren,
quotes, semi, no-undef,
space-before-function-paren,
padded-blocks */

var FibonacciGenerator = require('./fibonacci-generator')

describe('Fibonacci Genenerator', function () {
  it('returns number if given one number and told to add only one place', function () {
    var fibonacciGen = new FibonacciGenerator(1, 1)
    expect(fibonacciGen.compute).toEqual(1)
  })
})
