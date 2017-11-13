function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var x = 0;
    for (var i=min; i <= max; i++){
        x += i;
    }
  return(x);
}