function steamrollArray (arr) {
  const outputArr = [];

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (Array.isArray(element)) {
        helper(element);
      } else {
        outputArr.push(element);
      }
    }
  }
  helper(arr);
  return outputArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));