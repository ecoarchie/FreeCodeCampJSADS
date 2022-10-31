function mutation(arr) {
  const [a, b] = arr;

  for (let char of b.split('')) {
    if (!a.toLowerCase().includes(char.toLowerCase())) {
      return false;
    }
  }
  return true;
}

mutation(["Hello", "hey"]);
