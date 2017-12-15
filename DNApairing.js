// 1 split input into a char array

// 2 get first character = firstChar

// 3 check if  firstChar is G*
// 	Create pair [G,C]
// 4 else if firstChar is C*
// 	Creat pair [C,G]
// 5 else if firstChar is T*
// 	Create pair [T,A]
// 6 else if firstChar is A*
// 	Create pair [A,T]
// End if

// 7 push to dna strand array*

// 8 repeat step 3 for additional chars 

// 9 return dna strand

function pairElement(str) {
 var charArray = str.split("");
  //var firstChar = charArray[0];
  var dnaStrand = [];
//console.log(firstChar);
//   if (firstChar === "G"){
//     dnaStrand.push(["G","C"]);
//   }
//   else if (firstChar === "C"){
//     dnaStrand.push(["C","G"]);
//   }
//   else if (firstChar === "T"){
//     dnaStrand.push(["T","A"]);
//   }
//   else if (firstChar === "A"){
//     dnaStrand.push(["A","T"]);
//   }
  for (var i=0; i<charArray.length; i++){
    if (charArray[i] === "G"){
      dnaStrand.push(["G","C"]);
    }
    else if (charArray[i] === "C"){
    dnaStrand.push(["C","G"]);
  }
    else if(charArray[i] === "T"){
      dnaStrand.push(["T","A"]);
    }
    else if (charArray[i] === "A"){
      dnaStrand.push(["A","T"]);
    }
  }
 return dnaStrand;
}

pairElement("GCG");