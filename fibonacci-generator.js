var FibonacciGenerator = function () {}

FibonacciGenerator.prototype.compute = function (startingNum, sequenceLength) {
  var sequence = [0, startingNum]
  var newSequence = []
  for (var x = 0; x < sequenceLength; x++) {
    sequence.forEach(function (element) {
      var sum = element + sequence[x]
      newSequence.push(sum)
    })
  }
  return newSequence
}

module.exports = FibonacciGenerator
