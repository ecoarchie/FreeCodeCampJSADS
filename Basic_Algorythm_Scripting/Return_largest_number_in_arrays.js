function largestOfFour(arr) {
  const largestArr = [];

  for (const el of arr) {
    largestArr.push(Math.max(...el));
  }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
