function rot13(str) {
  var charcode = [];
  var convertedArray = [];
  for (var i =0; i<str.length; i++){
  charcode.push(str.charCodeAt(i));
  }
  for (var x =0; x<charcode.length; x++){
    if (charcode[x] < 65 || charcode[i]> 90){
      convertedArray.push(String.fromCharCode(charcode[x]));
    }
    else if (charcode[x]<78){
      convertedArray.push(String.fromCharCode(charcode[x] + 13));
    }
    else{
    convertedArray.push(String.fromCharCode(charcode[x] - 13));
     
    }
  }
  var sentence=convertedArray.join("");
  return sentence;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");