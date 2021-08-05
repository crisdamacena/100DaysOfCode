//### Use getters and setters to Control Access to an Object

// Only change code below this line
class Thermostat {
  constructor(graus) {
    this._graus =  (5/9 * (graus - 32));
  }
  // getter
  get temperature() {
    return this._graus;
  }
  // setter
  set temperature(updatedGraus) {
    this._graus = updatedGraus;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//### Create a Module Script

//<html>
//  <body>
//    <!-- Only change code below this line -->
//    <script type="module" src="index.js"></script>
//    <!-- Only change code above this line -->
//  </body>
//</html>

//### Use export to Share a Code Block

export const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { lowercaseString };

//### Reuse JavaScript Code Using import

import { uppercaseString, lowercaseString } from './string_functions.js';

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//### Use * to Import Everything from a File

import * as stringFunctions from './string_functions.js';

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//### Create an Export Fallback with export default

export default function subtract(x, y) {
  return x - y;
}

//### Import a Default Export

import subtract from "./math_functions.js";  
// Only change code above this line

subtract(7,4);

//### Create a JavaScript Promise

const makeServerRequest = new Promise((resolve, reject) => {

});

//### Complete a Promise with resolve and reject

//A promise has three states: pending, fulfilled, and rejected. 

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//### Handle a Fulfilled Promise with then

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

//### Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
