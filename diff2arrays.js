function diffArray(arr1, arr2) {
  var newArr = []; 
  function check(ck1,ck2){
    for (var i=0; i<ck1.length; i++){
      if (ck2.indexOf(ck1[i]) === -1) {
        newArr.push(ck1[i]);
      }
    }
  }
  
  check(arr1, arr2);
  check(arr2, arr1);
  
  return newArr;
}