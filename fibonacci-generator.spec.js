/*eslint-disable
space-before-function-paren,
quotes, semi, no-undef,
space-before-function-paren,
padded-blocks */

var FibonacciGenerator = require('./fibonacci-generator')

describe('Fibonacci Genenerator', function () {
  it('if given 1 and 1, will return fibonacci sequenece up to 1 places',
  function () {
    var fibonacciGen = new FibonacciGenerator()
    expect(fibonacciGen.compute(1, 1)).toEqual([0, 1])
  })
  it('if given 1 and 2, will return fibonacci sequenece up to 2 places',
  function () {
    var fibonacciGen = new FibonacciGenerator()
    expect(fibonacciGen.compute(1, 2)).toEqual([0, 1, 1, 2])
  })
  it('if given 1 and 3, will return fibonacci sequence up to 3 places',
  function () {
    var fibonacciGen = new FibonacciGenerator()
    expect(fibonacciGen.compute(1, 3)).toEqual([0, 1, 1, 2, 4])
  })
})
