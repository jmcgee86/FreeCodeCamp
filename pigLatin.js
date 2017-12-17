function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var cons = [];
  str = str.split("");
  if (vowels.indexOf(str[0])!=-1){
    str = str.join('')+"way";
  }
else {
  for (var i=0; i<str.length; i++){
    if(vowels.indexOf(str[i])==-1){
      cons.push(str[i]);
    }
    else if (vowels.indexOf(str[i]!=-1)){
      var removed=str.splice(0,i);
      str = str.join('')+cons.join('')+"ay";
      break;
    }
}
}
    return str;

}

translatePigLatin("glove");