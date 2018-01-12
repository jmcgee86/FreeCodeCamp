function uniteUnique(arr) {
  var unitedArray = [];
    for (var i = 0; i<arguments.length; i++){
          var args = arguments[i];
    for (var x=0; x<args.length; x++){
      var arrayNumbers = args[x];
    
      if (unitedArray.indexOf(arrayNumbers)<0){
        unitedArray.push(arrayNumbers);
      }
    }
    }
  
  return unitedArray;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);