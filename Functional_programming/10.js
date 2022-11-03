// Implement the filter Method on a Prototype

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  this.forEach((elem) => {
    if (callback(elem)) {
      newArray.push(elem);
    }
  });
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
