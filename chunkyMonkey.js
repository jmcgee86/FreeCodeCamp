function chunkArrayInGroups(arr, size) {
var newArray = [];
 var start=0;
 var stop = size;
 for (var i = 0; i<(arr.length/size); i++){
  newArray.push(arr.slice(start, stop));
  start = start+size;
  stop += size;  
  }
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);