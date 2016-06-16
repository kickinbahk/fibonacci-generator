var FibonacciGenerator = function () {}

FibonacciGenerator.prototype.compute = function (endingNum) {
  var sequence = [0, 1]
  for (var x = sequence[1]; x <= endingNum; x++) {
    if (endingNum === 1) {
      return sequence
    }
    var sum = sequence[x] + sequence[x - 1]
    sequence.push(sum)
  }
  return sequence
}

module.exports = FibonacciGenerator
