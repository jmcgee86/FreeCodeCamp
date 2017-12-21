function binaryAgent(str) {
  var array = [];
  var parsArray = [];
  var charArray = [];
  array = str.split(" ");
  for (var i = 0; i<array.length; i++){
     parsArray.push(parseInt(array[i],2));
     charArray.push(String.fromCharCode(parsArray[i]));
    }
  var sentence= charArray.join("");
  
  return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");