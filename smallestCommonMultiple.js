function smallestCommons(arr) {
var min = Math.min(arr[0], arr[1]);
var max = Math.max(arr[0], arr[1]);
var range = [];
var notDivisible = [];
var divisible = [];
var multipleFound = false;
var testNumber = 1;
var multiple;
  
for (var r = max; r>=min; r--){
  range.push(r);
}
while (multipleFound ==false){
    notDivisible = [];
    divisible = [];
    multiple = max*testNumber;
    for (var i=0; i<range.length; i++){
      if (multiple%range[i]!==0){
        notDivisible.push(range[i]);
      }else{
        divisible.push(range[i]);
      }
    }
    if (divisible.length !==range.length){
        multipleFound = false;
    }else{
        return multiple;
    }
    testNumber +=1;
  }
  return multiple;
}

smallestCommons([1,5]);