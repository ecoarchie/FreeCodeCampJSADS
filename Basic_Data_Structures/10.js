// Check For The Presence of an Element With indexOf()\

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) === -1) {
    return false;
  }
  return true;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
