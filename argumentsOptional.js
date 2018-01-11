function addTogether() {
    var sum = 0;
 if (arguments.length === 2){
    sum = (arguments[0])+arguments[1];
   if (typeof sum != 'number'){
     return undefined;
   }else{
     return sum;
   }
}
  else{
    var first = arguments[0];
    if (typeof first != 'number'){
      return undefined;
    }else{
   return function(x){
     if (typeof x != 'number'){
       return undefined;
     }else{
     return first + x;
     }
  };
}
}
}
addTogether("http://bit.ly/IqT6zt");