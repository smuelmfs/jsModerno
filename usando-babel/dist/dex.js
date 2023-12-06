"use strict";

var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middleIndex = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middleIndex];
  }
  var firstMedian = orderedNumbers[middleIndex - 1];
  var secondMedian = orderedNumbers[middleIndex];
  return average(firstMedian, secondMedian);
};
console.log("Mediana ".concat(median(2, 3, 4, 3, 2, 2223, 2, 2, 2, 11)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return n === num;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 66, 66, 66, 66, 66, 99, 99, 99, 99, 99, 99, 9, 123, 4, 45, 5, 3, 4234, 2)));