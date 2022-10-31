function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  let i = 0;
  while (num > arr[i]) {
    i++;
  }
  return i;
}

getIndexToIns([10, 20, 30, 40, 50], 30);
