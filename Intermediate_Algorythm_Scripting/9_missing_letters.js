function fearNotLetter(str) {
  let i = str.charCodeAt(0);
  let j = 0;
  while (i <= str.charCodeAt(str.length - 1)) {
    if (i !== str.charCodeAt(j)) {
      return String.fromCharCode(i);
    }
    i++;
    j++;
  }
  return undefined;
}

console.log(fearNotLetter("abcde"));