// Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

const glideMixin = (obj) => {
  obj.glide = () => {
    console.log('gliiiide');
  }
};

glideMixin(bird);
glideMixin(boat);
