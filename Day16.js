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

 //#### Falsy Bouncer

function bouncer(arr1) {

  let arr2 = arr1.filter(function(v) {
    if (v != false && v != null && v != 0 && v != "" && v != undefined && v != NaN){
      return v;
    }else{

    }
  });

  return arr2;
}

console.log(bouncer([7, "ate", "", false, 9]));

//Solução elegante e simples

function bouncer(arr1) {

  let arr2 = arr1.filter(function(v) {
    return v;
  });

  return arr2;
}

//#### Where do I Belong


