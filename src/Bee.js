var Bee = function() {
  Grub.call(this);
  Bee.age = 5;
  Bee.color = 'yellow';
  Bee.job = 'keep on growing';
  console.log(this.eat);
};

  Bee.prototype = Object.create(Grub.prototype);
  Bee.prototype.constructor = Bee;
  



// Create a Bee class, in pseudoclassical style, with:
// call the Grub superclass
// set the prototype
// set the constructor
// an age property that is set to 5
// a color property that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a job property that is set to keep on growing
