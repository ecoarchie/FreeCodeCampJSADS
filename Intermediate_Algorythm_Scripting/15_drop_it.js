function dropElements(arr, func) {
  
  while (arr.length !== 0) {
    if (func(arr[0])) {
      return arr;
    }
    arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));