// Combine an Array into a String Using the join Method

function sentensify(str) {
  return str.split(/\W/).join(' ');
}

sentensify("May-the-force-be-with-you");