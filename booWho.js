function booWho(bool) {
var x;
  if (typeof bool === 'boolean') {
  x = true;
}  
  else  {
    x = false;
  } 
  return x;
}
booWho(false);