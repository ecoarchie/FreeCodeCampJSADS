function palindrome(str) {
  const formattedStr = str.replace(/[\W_]/g, "").toLowerCase();
  return formattedStr === formattedStr.split("").reverse().join("");
}

console.log(palindrome("_eye"));
