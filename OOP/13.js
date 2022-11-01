// Change the Prototype to a New Object

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: () => {
    conslole.log('Nom nom');
  },
  describe: () => {
    console.log('My name is ' + this.name);
  },
};
