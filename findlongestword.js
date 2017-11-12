function findLongestWord(str) {
var arrayOfWords = str.split(' ');
var longest=0;  
    for  (var i = 0; i < arrayOfWords.length; i++){
      if (arrayOfWords[i].length >= longest) {
      longest = arrayOfWords[i].length;
    }
  }
  return longest;
}