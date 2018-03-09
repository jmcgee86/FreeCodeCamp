// function findElement(arr, func) {
//   var passes = 0;
//   for(var i=0; i<=arr.length; i++){
//     passes = (arr.filter(func))[0];
//     }
// return passes;
// }

// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

function findElement(arr, func) {
  return arr.filter(func)[0];
}
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });