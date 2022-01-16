//#### Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let novoArr = [];

  for (let i=0; i<4; i++){
    novoArr.push(Math.max.apply(null, arr[i]));
  }
  
  return novoArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//#### Confirm the Ending

function confirmEnding(str, target) {
  
  if ((str.substring(str.length - target.length)) == target){
    return true;
  }
  else{
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

//#### Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let novaStr = "";

  if (num<=0){
    return "";
  }
  else{
    for (let i=0; i<num; i++){
      novaStr += str;
    }
  }
  return novaStr;
}

repeatStringNumTimes("abc", 3)

//#### Truncate a String

function truncateString(str, num) {

  if(str.length <= num){
    return str;
  }

  return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//#### Finders Keepers

function findElement(arr, func) {
  let num; 
  for(var i = 0; i <arr.length; i++) {
    
    if(func(arr[i]) === true) {
      num = arr[i];      
      return num;    
    }
  }
}
findElement([1, 2, 3, 4], num => num % 2 === 0)


//#### Boo who

function booWho(bool) {
  if (bool === true){
    return true;
  }
  else if (bool === false){
    return true;
  }
  return false;
}
booWho(null)

//#### Title Case a Sentence

function titleCase(str) {
  return (str.toLowerCase()).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));

//#### Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let aux = [];
  
 aux.push(...arr2.slice(0,n));
 aux.push(...arr1);
 aux.push(...arr2.slice(n, arr2.length));
 
 return aux;
 }
 
 frankenSplice([1, 2, 3], [4, 5, 6], 1);
