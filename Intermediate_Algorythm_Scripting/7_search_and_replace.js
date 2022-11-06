// Search and replace

function myReplace(str, before, after) {
  const regex = /^[A-Z]/;
  after = regex.test(before)
    ? after.split('').slice(0, 1)[0].toUpperCase() 
      + after.split('').slice(1).join('')
    : after.toLowerCase();
  
  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));