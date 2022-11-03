function destroyer(arr) {
  const argsToRemove = Object
        .values(arguments)
        .filter(item => typeof item !== 'object');
  return arr.filter(item => !argsToRemove.includes(item));
}

destroyer(["tree", "hamburger", 53], "tree", 53);