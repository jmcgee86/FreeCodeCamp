function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var sum = 0;
    var sumArray = [];
    for (var i=min; i <= max; i++){
    sumArray.push(i);    
    }
function getSum(total, num) {
    return total + num;
}
  sum = sumArray.reduce(getSum);
  return sum;
}

sumAll([4, 1]);

/*Sum All Numbers in a Range
Candice Brown and Jim McGee


Input: 2-digit array, unordered number array

Output: addition of all numbers including the min number, and up to including the max number; return the total sum value

Steps:

Of two numbers provided, determine lowest and highest values
Starting at lowest, determine all values between the highest and lowest values
Push all values into array
Add all values within the array
Return Sum Total*/
	
