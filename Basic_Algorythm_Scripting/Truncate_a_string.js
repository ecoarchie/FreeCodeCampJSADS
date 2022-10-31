function truncateString(str, num) {
  return str.slice(0, num)
    .concat(str.length > num ? '...' : '');
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
