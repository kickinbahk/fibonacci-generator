/*eslint-disable
space-before-function-paren,
quotes, semi, no-undef,
space-before-function-paren,
padded-blocks */

var FibonacciGenerator = require('./fibonacci-generator')

describe('Fibonacci Genenerator', function () {
  var fibonacciGen = new FibonacciGenerator()

  it('if given 1, will return fibonacci sequence to 1',
  function () {
    expect(fibonacciGen.compute(1)).toEqual([0, 1, 1])
  })

  it('if given 2 will return fibonacci sequence up to 2 different numbers',
  function () {
    expect(fibonacciGen.compute(2)).toEqual([0, 1, 1, 2])
  })

  it('if given 3, will return fibonacci sequence up to 3 different numbers',
  function () {
    expect(fibonacciGen.compute(3)).toEqual([0, 1, 1, 2, 3])
  })

  it('if given 4, will return sequence up to 4 numbers', function () {
    expect(fibonacciGen.compute(4)).toEqual([0, 1, 1, 2, 3, 5])
  })
})
