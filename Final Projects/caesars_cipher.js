function rot13(str) {
  let outputStr = "";

  for (let char of str) {
    if (/\W/.test(char)) {
      outputStr += char;
      continue;
    }
    let charCode = char.charCodeAt(0) + 13 - (char.charCodeAt(0) > 77 ? 26 : 0);
    outputStr += String.fromCharCode(charCode);
  }
  return outputStr;
}

console.log(rot13("SERR PBQR PNZC!"));
