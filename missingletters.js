function fearNotLetter(str) {
  var firstLetter = str[0]; 
  
   //console.log(firstLetter.charCodeAt(0));
  //console.log("code for b is", "b".charCodeAt(0));
  for (var i =0; i < str.length - 1; i++){
  //  console.log(str[i]);
    if(str.charCodeAt(i + 1) === str.charCodeAt(i) + 1){
      console.log("next character is the next alphabetically");
    }else {
      console.log("found missing character");
      return String.fromCharCode(str.charCodeAt (i) + 1); 
    }
  }
  //console.log("hello");
return undefined;
}

fearNotLetter("abcde");