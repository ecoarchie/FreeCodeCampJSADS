// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
  /* 
  using map and filter
  const newArr = arr.filter(num => num > 0 && num === Math.floor(num))
                    .map(num => num * num); 
  */

  const newArr = arr.reduce((acc, value) => {
    if (value > 0 && value === Math.floor(value)) {
      acc.push(value * value);
    }
    return acc;
  }, []);
  return newArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);