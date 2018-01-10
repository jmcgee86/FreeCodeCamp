function sumFibs(num) {
var previousFib = 0;
var currentFib = 1;
var totalFib = 0;
  while(currentFib <= num){
    if (currentFib %2 !=0){
      totalFib += currentFib;
    currentFib += previousFib;
    previousFib = currentFib - previousFib;
    }else{
    currentFib += previousFib;
    previousFib = currentFib - previousFib;
    }
  }
  return totalFib;
}

sumFibs(4);