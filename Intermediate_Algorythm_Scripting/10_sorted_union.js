function uniteUnique(...arr) {
  return arr.reduce((acc, cur) => {
    for (let num of cur) {
      if (!acc.includes(num)) {
        acc.push(num);
      }
    }
    return acc;
  }, []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));