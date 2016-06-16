var FibonacciGenerator = function () {}

FibonacciGenerator.prototype.compute = function (endingNum) {
  var sequence = [0, 1]
  for (var x = 1; x < endingNum; x++) {
    sequence.forEach(function (element) {
      var sum = element + sequence[x]
      sequence.push(sum)
    })
  }
  return sequence
}

module.exports = FibonacciGenerator
