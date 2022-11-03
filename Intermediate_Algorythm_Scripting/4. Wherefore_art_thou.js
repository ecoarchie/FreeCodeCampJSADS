function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  const arr = collection
        .filter((item) => {
          return sourceKeys.every((key) => item[key] === source[key])  
        })
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });