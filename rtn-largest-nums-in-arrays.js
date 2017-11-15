function largestOfFour(arr) {
var largestInEachArray=[];
  for  (var i = 0; i < arr.length; i++){
    var largest= arr[i][0];
      for (var si=1; si<arr[i].length; si++){
 if (arr[i][si]>largest){
   largest=arr[i][si];
 }       
    }
  largestInEachArray[i]=largest;
}
  return largestInEachArray;
}