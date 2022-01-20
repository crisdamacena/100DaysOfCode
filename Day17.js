//#### Where do I Belong

function getIndexToIns(arr, num) {

  arr.sort(function(a,b){
    return a - b;
  })

  for (let i = 0; i < arr.length; i+= 1){
    if (num <= arr[i]){
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50)

//#### Mutations

function mutation(arr) {
  let i=0;
  let status = true;
  while (i<arr[1].length) {
    if (arr[0].toLowerCase().indexOf(arr[1].charAt(i).toLowerCase())>=0){
       i++;
    }
    else{
      return status = false;
    }    
  } 
  return status;
}

console.log(mutation(["hello", "Hello"]));

//#### Chunky Monkey

function chunkArrayInGroups(arr1, size) {

  let arr2 = [];

  for (let i = 0; i < arr1.length; i = i+size) {
    arr2.push(arr1.slice(i, i + size));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

