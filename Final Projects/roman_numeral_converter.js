function convertToRoman(num) {
  const convertTable = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

  const replacement = {
    VIIII: "IX",
    LXXXX: "XC",
    DCCCC: "CM",
    IIII: "IV",
    XXXX: "XL",
    CCCC: "CD",
  };

  let roman = "";
  let reminder;

  for (let devider of Object.keys(convertTable).sort((a, b) => b - a)) {
    let numOfSymb = Math.floor((reminder ?? num) / devider);

    roman += convertTable[devider].repeat(numOfSymb);
    reminder = num % devider;
  }
  for (let key of Object.keys(replacement)) {
    roman = roman.replace(key, replacement[key]);
  }
  return roman;
}

console.log(convertToRoman(97));
