function repeatStringNumTimes(str, num) {
var rptStr="";
   for  (var i = 0; i < num; i++){
     if (num>0){
 rptStr+=str;
   }else{
     return"";
   }
  }
return rptStr;
}