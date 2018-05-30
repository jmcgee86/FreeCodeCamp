function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var solution = [];
  for(var i=0; i<arr.length; i++){
    var name = arr[i].name;
    var alt = arr[i].avgAlt;
    var a = earthRadius+alt;
    var OP = Math.round(2*Math.PI*Math.sqrt(Math.pow(a,3)/GM));
    solution.push({name: name, orbitalPeriod: OP});
  }
  return solution;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);