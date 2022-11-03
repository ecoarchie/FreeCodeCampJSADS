// Add Elements to the End of an Array Using concat Instead of push

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);