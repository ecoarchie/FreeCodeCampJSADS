function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return '';
  }
  let duplicate = str;
  for (let i = 1; i < num; i++) {
    str = `${str}${duplicate}`;
  }
  return str;
}

repeatStringNumTimes("abc", 3);
