/*eslint-disable
space-before-function-paren,
quotes, semi, no-undef,
space-before-function-paren,
padded-blocks */

var FibonacciGenerator = require('./fibonacci-generator')

describe('Fibonacci Genenerator', function () {
  var fibonacciGen = new FibonacciGenerator()

  // tests for 1 place
  it('if given 1 and 1, will return fibonacci sequenece up to 1 places',
  function () {
    expect(fibonacciGen.compute(1, 1)).toEqual([0, 1])
  })
  it('if given 2 and 1, will return fib sequence starting at 2, up to 1 place', function () {
    expect(fibonacciGen.compute(2, 1)).toEqual([0, 2])
  })

  // tests for 2 places
  it('if given 1 and 2, will return fibonacci sequenece up to 2 places',
  function () {
    expect(fibonacciGen.compute(1, 2)).toEqual([0, 1, 1, 2])
  })
  it('if given 2 and 2, will return fib sequence starting at 2, up to 2 places', function () {
    expect(fibonacciGen.compute(2, 2)).toEqual([0, 2, 2, 4])
  })

  // tests for 3 places
  it('if given 1 and 3, will return fibonacci sequence up to 3 places',
  function () {
    expect(fibonacciGen.compute(1, 3)).toEqual([0, 1, 1, 2, 3])
  })
})
