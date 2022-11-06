function sumPrimes(num) {
  const primeNums = [2];
  let isPrime;
  
  for (let i = 3; i <= num; i++) {
    isPrime = true;
    for (let j = 2; j <= Math.round(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNums.push(i); 
    }
  }
  return primeNums.reduce((sum, cur) => sum + cur);
}

console.log(sumPrimes(10));