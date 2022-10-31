function findLongestWordLength(str) {
  const strArr = str.split(' ');
  let maxLength = 0;
  for (let word of strArr) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
