function steamrollArray(arr) {
  var flat = [];
  var flatten = function (arr){
    for (var i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        flatten(arr[i]);
      }else{
        flat.push(arr[i]);
      }
    }
    return flat;
  };
  return flatten(arr);
}