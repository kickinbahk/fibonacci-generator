/*eslint-disable
space-before-function-paren,
quotes, semi, no-undef,
space-before-function-paren,
padded-blocks */

var FibonacciGenerator = require('./fibonacci-generator')

describe('Fibonacci Genenerator', function () {
  var fibonacciGen = new FibonacciGenerator()

  // tests for 1 place
  it('if given 1, will return fibonacci sequenece up to 1 places',
  function () {
    expect(fibonacciGen.compute(1)).toEqual([0, 1])
  })

  // tests for 2 places
  it('if given 2 will return fibonacci sequenece up to 2 places',
  function () {
    expect(fibonacciGen.compute(2)).toEqual([0, 1, 1, 2])
  })


  // tests for 3 places
  it('if given 3, will return fibonacci sequence up to 3 places',
  function () {
    expect(fibonacciGen.compute(3)).toEqual([0, 1, 1, 2, 3])
  })
})
