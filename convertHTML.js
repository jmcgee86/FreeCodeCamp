// function convertHTML(str) {
// str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
// return str;
// }

// convertHTML("Dolce & Gabbana");

//better solution
var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};
function convertHTML(str) {
    return str.split('').map(function(char) {return hashMap[char] ? hashMap[char] : char;}).join('');
}

convertHTML("Dolce & Gabbana");