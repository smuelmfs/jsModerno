const average = (...numbers) => {
  const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
  return sum / numbers.length;
};

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9, 12)}`);

const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accumulator, { number, weight }) => accumulator + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce(
    (accumulator, entry) => accumulator + (entry.weight ?? 1),
    0
  );

  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightedAverage(
    { number: 3, weight: 2 },
    { number: 6 },
    { number: 10, weight: 4 },
    { number: 9 },
    { number: 12, weight: 6 }
  )}`
);

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middleIndex = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middleIndex];
  }
  const firstMedian = orderedNumbers[middleIndex - 1];
  const secondMedian = orderedNumbers[middleIndex];
  return average(firstMedian, secondMedian);
};

console.log(`Mediana ${median(2, 3, 4, 3, 2, 2223, 2, 2, 2, 11)}`);

const mode = (...numbers) => {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => n === num).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(
  `Moda: ${mode(
    1,
    1,
    66,
    66,
    66,
    66,
    66,
    99,
    99,
    99,
    99,
    99,
    99,
    9,
    123,
    4,
    45,
    5,
    3,
    4234,
    2
  )}`
);
