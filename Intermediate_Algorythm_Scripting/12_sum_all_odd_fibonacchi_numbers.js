function sumFibs(num) {
  const arr = [1, 1];

  for (let i = 2; arr[i - 1] <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    if (arr[i] > num) {
      arr.pop();
    }
  }
  return arr.filter((num) => num % 2 !== 0)
            .reduce((sum, cur) => sum + cur);
}

console.log(sumFibs(10));