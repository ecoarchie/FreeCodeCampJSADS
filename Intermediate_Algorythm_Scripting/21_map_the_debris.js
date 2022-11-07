function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((el) =>({name: el.name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM))}));
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));