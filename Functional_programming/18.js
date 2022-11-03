// Return a Sorted Array Without Changing the Original Array

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const newArr = arr.slice();
  return newArr.sort((a, b) => a - b)
}

nonMutatingSort(globalArray);