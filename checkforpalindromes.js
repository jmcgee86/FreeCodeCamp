function palindrome(str) {
str=str.toLowerCase().replace(/[^a-z^0123456789]/g,'');
return str===str.split('').reverse().join('');  
}