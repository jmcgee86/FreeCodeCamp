// function truthCheck(collection, pre) {
//   // Is everyone being true?
//   var trueArray = [];
//   var falseArray = [];
//   for (var i = 0; i<collection.length; i++){
//   if(collection[i][pre]){
//     trueArray.push(collection[i]);
//   }else{
//     falseArray.push(collection[i]);
//   }
//   }
//   if (falseArray.length>0){
//     return false;
//   }else{
//     return true;
//   }
  
// }

// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");

// function truthCheck(collection, pre) {
// var detector; 
//   for (var i = 0; i<collection.length; i++){
//   if(collection[i][pre]){
//     detector = true;
//   }else{
//     detector = false;
//     return detector;
//   }
// }
//   return detector;
// }
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");

function truthCheck(collection, pre) {
   for (var i = 0; i<collection.length; i++){
  if(!collection[i][pre]){
  return false;
  }
}
  return true;
}
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");