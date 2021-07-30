//### Write Reusable JavaScript with Functions

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//### Passing Values to Functions with Arguments

function functionWithArgs(num1, num2){
  console.log(num1 + num2);
}

functionWithArgs(1,2);

//### Global Scope and Functions

// Declare the myGlobal variable below this line

var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//### Local Scope and Functions

function myLocalScope() {

  // Only change code below this line

  var myVar;

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//### Global vs. Local Scope in Functions

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

//### Return a Value from a Function with Return

function timesFive(num) {
  return num * 5;
}

//### Understanding Undefined Value returned from a Function

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

//### Assignment with a Returned Value

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

//### Stand in Line

function nextInLine(arr, item) {
  // Only change code below this line
  
  arr.push(item);
  var removed = arr.shift();

  return removed;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//### Understanding Boolean Values

function welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//### Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
  // Only change code below this line

  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line

}

//### Comparison with the Equality Operator

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//### Comparison with the Strict Equality Operator

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//### Practice comparing different values

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//### Comparison with the Inequality Operator

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//### Comparison with the Strict Inequality Operator

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//### Comparison with the Greater Than Operator

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//### Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//### Comparison with the Less Than Operator

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//### Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//### Comparisons with the Logical And Operator

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//### Comparisons with the Logical Or Operator

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//### Introducing Else Statements

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result =  "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//### Introducing Else If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  }else{
    return "Between 5 and 10";
  }
}

testElseIf(7);

//### Logical Order in If Else Statements

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//### Chaining If Else Statements

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  }else if (num < 10) {
    return "Small";
  }else if (num < 15) {
    return "Medium";
  }else if (num < 20) {
    return "Large";
  }else if (num >= 20) {
    return "Huge";
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);

//### Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes == 1){
    return names[0];
  }else if (strokes <= par - 2) {
    return names[1];
  }else if (strokes == par - 1) {
    return names[2];
  }else if (strokes == par) {
    return names[3];
  }else if (strokes == par + 1) {
    return names[4];
  }else if (strokes == par + 2) {
    return names[5];
  }else if (strokes >= par + 3) {
    return names[6];
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

//### Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  }
  // Only change code above this line
  return answer;
}

caseInSwitch(1);

//### Adding a Default Option in Switch Statements

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//### Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//### Replacing If Else Chains with Switch

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//### Returning Boolean Values from Functions

function isLess(a, b) {
  // Only change code below this line
    return (a < b);
  // Only change code above this line
}

isLess(10, 15);

//### Return Early Pattern for Functions

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0){
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//### Counting Cards

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//### Build JavaScript Objects

var myDog = {
  // Only change code below this line
    name: "Rex",
    legs: 10,
    tails: 20,
    friends: ["Jack", "Sam"]
  // Only change code above this line
  };

//### Accessing Object Properties with Dot Notation

// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

//### Accessing Object Properties with Bracket Notation

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

//### Accessing Object Properties with Variables

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line

//###  Updating Object Properties

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog.name = "Happy Coder";

//### Add New Properties to a JavaScript Object

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

//### Delete Properties from a JavaScript Object

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

//### Using Objects for Lookups

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }

  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

//### Testing Objects for Properties

function checkObj(obj, checkProp) {
  // Only change code below this line

  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }

  return "Not Found";
  // Only change code above this line
}

//### Manipulating Complex Objects

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
    {
    "artist": "Billy Joel",
    "title": "The Stranger",
    "release_year": 1977,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

//### Accessing Nested Objects

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

//### Accessing Nested Arrays

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];

//### Record Collection

//You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.
//
//You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.
//
//Your function must always return the entire record collection object.
//If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//If value is an empty string, delete the given prop property from the album.
//Note: A copy of the recordCollection object is used for the tests.

// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(records[id].hasOwnProperty(prop)){
    if(value === ""){
      delete records[id][prop];
    }else if(prop == "tracks"){
      records[id][prop].push(value);
    }else{ records[id][prop]= value;
    }
  } else {
    if(value != ""){
      if(prop == "tracks"){
        records[id][prop] = [value];
      }else{
        records[id][prop] = value;
      }
    }
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//### Iterate with JavaScript While Loops

// Setup
var myArray = [];

// Only change code below this line

var i = 5;
while(i < 6 && i >=0) {
  myArray.push(i);
  i--;
}

//### Iterate with JavaScript For Loops


