// Add Methods After Inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => {
  console.log('Woof!');
};

let beagle = new Dog();
