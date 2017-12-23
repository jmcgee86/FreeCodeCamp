function destroyer(arr) {
var args = Array.prototype.slice.call(arguments);
  var finished = [];
for(var i =0; i<arr.length; i++){
  for (var a = 0; a<args.length; a++){
    if (arr[i] === args[a]){
        delete(arr[i]); 
        }
    
   }
 }
  for (var n=0; n<arr.length; n++){
    if(arr[n]){
      finished.push(arr[n]);
    }
  }
  return finished;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);