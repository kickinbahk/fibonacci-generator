/*eslint-disable
space-before-function-paren,
quotes, semi, no-undef,
space-before-function-paren,
padded-blocks */

var FibonacciGenerator = require('./fibonacci-generator')

describe('Fibonacci Genenerator', function () {
  it('returns number if given one number and told to add only one place',
  function () {
    var fibonacciGen = new FibonacciGenerator()
    expect(fibonacciGen.compute(1, 1)).toEqual([0, 1])
  })
  it('returns number and sum of previous number when given 2 numbers',
  function () {
    var fibonacciGen = new FibonacciGenerator()
    expect(fibonacciGen.compute(1, 2)).toEqual([0, 1, 2])
  })
})
