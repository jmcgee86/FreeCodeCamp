function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var keys = Object.keys(source);
  var counter = 0;
  
  // Only change code below this line
  for(var i=0;i<collection.length;i++){
    counter = 0;
    for(var k=0; k<keys.length; k++){
      var key = keys[k];
      if(collection[i].hasOwnProperty(key)){
        if(collection[i][key]===source[key]){
          counter+=1;
        }
      }
      if(counter==keys.length){
        arr.push(collection[i]);
      }
    }
  }
  // Only change code above this line
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });