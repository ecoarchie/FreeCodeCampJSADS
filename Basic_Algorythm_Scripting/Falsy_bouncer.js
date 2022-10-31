function bouncer(arr) {
  return arr
    .filter(el => Boolean(el) === true);
}

bouncer([7, "ate", "", false, 9]);
