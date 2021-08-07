//### Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /Haz{1,}ah/g; // Change this line
let result = haRegex.test(haStr);

//### Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/g; // Change this line
let result = timRegex.test(timStr);

//### Check for All or None

let favWord = "favorite";
let favRegex = /favou?rite/g; // Change this line
let result = favRegex.test(favWord);

//### Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
//Other way
let sampleWord = "astronaut";
let pwRegex = /\D(?=\w{5,})(?=\w*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);

//### Check For Mixed Grouping of Character

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

//### Reuse Patterns Using Capture Groups

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

//### Use Capture Groups to Search and ReplacePassed

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

//### Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/; // Change this line
let result = hello.replace(wsRegex,"$2"); // Change this line

//################## Debugging ##################

//#### Use the JavaScript Console to Check the Value of a Variable

let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
console.log(a);

//#### Understanding the Differences between the freeCodeCamp and Browser Console

// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

console.log(output);

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.

console.clear();

//### Use typeof to Check the Type of a Variable

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line

console.log(typeof seven);
console.log(typeof three);

//### Catch Misspelled Variable and Function Names

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//### Catch Unclosed Parentheses, Brackets, Braces and Quotes

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous,current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//### Catch Mixed Usage of Single and Double Quotes

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//### Catch Use of Assignment Operator Instead of Equality Operator

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//### Catch Missing Open and Closing Parenthesis After a Function Call

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

//### Catch Arguments Passed in the Wrong Order When Calling a Function

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base,exp);
console.log(power);

//### Catch Off By One Errors When Using Indexing

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

//### Use Caution When Reinitializing Variables Inside a Loop

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];

  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

//### Prevent Infinite Loops with a Valid Terminal Condition

function myFunc() {
  for (let i = 0; i <= 4; i += 2) {
    console.log("Still going!");
  }
}


