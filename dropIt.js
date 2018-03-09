// function dropElements(arr, func) {
//   // Drop them elements.
//   var fail = [];
//   for (var i = 0; i<arr.length; i++){
//     if (!func(arr[i])){
//       fail.push(arr[i]);
//     }
//   }
//   for (var n=0; n<arr.length; n++){
//      if (fail.length == arr.length){
//       arr = [];
//      }
//      else if (func(arr[n])){
//       arr.splice(0,n);
//       break;
//     }
//   } 
//   return arr;
// }

// dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

function dropElements(arr, func) {
  for (var i = 0; i<arr.length; i++){
    if (func(arr[i])){
      return arr.slice(i);
    }
  }
 return []; 
}


dropElements([1, 2, 3, 4], function(n) {return n >= 3;});