
//### Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h*?1>/; // Change this line
let result = text.match(myRegex);

//### Find One or More Criminals in a Hunt

let reCriminals = /C+/; // Change this line

//### Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//### Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

//### Match All Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//### Match Everything But Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//### Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//### Match All Non-Numbers

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//### Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i; // Change this line
let result = userCheck.test(username);

//### Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//### Match Non-Whitespace Characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

//#### Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/i; // Change this line
let result = ohRegex.test(ohStr);

//### Specify Only the Lower Number of Matches