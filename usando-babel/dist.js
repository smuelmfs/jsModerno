"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accumulator, number) {
    return accumulator + number;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(average(3, 6, 10, 9, 12)));
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accumulator, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accumulator + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accumulator, entry) {
    var _entry$weight;
    return accumulator + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightedAverage({
  number: 3,
  weight: 2
}, {
  number: 6
}, {
  number: 10,
  weight: 4
}, {
  number: 9
}, {
  number: 12,
  weight: 6
})));
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
