function addTogether(a, b) {
  if (arguments.length === 1 && [...arguments].every(arg => typeof arg === 'number')) {
    return (b) => {
      if (typeof b !== 'number') {
        return undefined;
      }
      return a + b;
    }
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return undefined;
  }
  return a + b;
  
}

console.log(addTogether(2)(3));