function translatePigLatin(str) {
  const regexFirstVowel = /\b[aeiuo]/;
  const regexAllConsonants = /^[^aeiuo]$/;
  const strArr = str.split('');

  if (regexFirstVowel.test(str) || regexAllConsonants.test(str)) {
    return str.concat('way');
  }
  let i = 0;
  while (!regexFirstVowel.test(strArr[i])) {
    i++;
  }
  const firstConsonants = strArr.splice(0, i);
  return strArr.concat(firstConsonants, 'ay').join('');
}

console.log(translatePigLatin("california"));