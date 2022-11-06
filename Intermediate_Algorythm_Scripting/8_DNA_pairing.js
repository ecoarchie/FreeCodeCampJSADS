// DNA pairing

function pairElement(str) {
  const pairObj = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  return str.split('')
    .map((char) => [char, pairObj[char]]);
}

console.log(pairElement("GCG"));