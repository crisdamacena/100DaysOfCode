//### Copy Array Items Using slice()

function forecast(arr) {
  // Only change code below this line
  arr = arr.slice(2, 4);
  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//### Copy an Array with the Spread Operator

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//### Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());

//### Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) == -1){
    return false;
  }
  else{
    return true;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//### Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//### Create complex multi-dimensional arrays

let myNestedArray = [
  // Only change code below this line
  [
    ['deep']
  ],
  [
    [
      ['deeper']
    ]
  ],
  [
    [
      [
        ['deepest']
      ]
    ],
    [
      [
        ['depth']
      ]
    ]
  ]
  // Only change code above this line
];

//### Add Key-Value Pairs to JavaScript Objects

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods['strawberries'] = 27;
// Only change code above this line

console.log(foods);

//### Modify an Object Nested Within an Object

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

//### Access Property Names with Bracket Notation

