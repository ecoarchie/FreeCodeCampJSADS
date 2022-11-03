function spinalCase(str) {
  const regex = /[^a-zA-Z0-9'"]/g;
  let arrFromStr = str.replace(regex, '-')
            .split('');
  for (let i = 0; i < arrFromStr.length; i++) {
    if (/[A-Z]/.test(arrFromStr[i]) && /[a-z]/.test(arrFromStr[i - 1])) {
      arrFromStr.splice(i, 0, '-')
    }
  }
  arrFromStr = arrFromStr[0] === '-' ? arrFromStr.splice(1) : arrFromStr;
  return arrFromStr
  .join('')
  .toLowerCase();
}

console.log(spinalCase('This-IsSpinalTap'));