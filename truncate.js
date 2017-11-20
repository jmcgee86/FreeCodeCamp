function truncateString(str, num) {
if (str.length>num+3  && num>3)  {
str=str.slice(0,num-3)+"...";
}
  else if (str.length<=num){
  str=str;
}
  else{
    str=str.slice(0,num)+'...';
  }  return str;
}