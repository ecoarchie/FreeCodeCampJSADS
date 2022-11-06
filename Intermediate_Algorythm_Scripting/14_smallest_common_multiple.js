function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = [...Array(max - min + 1).keys()].map(i => i + min);

  let numToFind = 1;
  while (!range.every((val) => numToFind % val === 0)) {
    numToFind++;
  }
  return numToFind;
}

console.log(smallestCommons([2,10]));