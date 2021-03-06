//################## Object Oriented Programming ##################

//#### Create a Basic JavaScript Object

let dog = {
  name: "Fred",
  numLegs :3
};

//#### Use Dot Notation to Access the Properties of an Object

let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);

//#### Create a Method on an Object

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {return "This dog has " + dog.numLegs + " legs."}
};

dog.sayLegs();

//#### Make Code More Reusable with the this Keyword

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

console.log(dog.sayLegs());

//#### Define a Constructor Function

function Dog(){
  this.name = "Jo";
  this.color = "yellow";
  this.numLegs = 4;
}

//#### Use a Constructor to Create Objects

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

//#### Extend Constructors to Receive Arguments

function Dog(name, color, numLegs) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Jose", "black");

//##### Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);

myHouse instanceof House;

//#### Understand Own Properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

//#### Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");

Dog.prototype.numLegs = 4;

//#### Iterate Over All Properties

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

//#### Understand the Constructor Property

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

//#### Change the Prototype to a New Object

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function(){

  },
  describe: function(){
    
  }
};

//#### Remember to Set the Constructor Property when Changing the Prototype

