function spinalCase(str) {
var whiteSpace = /\s/g;//selects all white spaces
var nonLetters = /[^a-z]/gi;//selects non-letter characters
var capital = /([a-z])((?=[A-Z]))/g;//selects capital letters preceded by lowercase letter
var spinalString = str.replace(capital, '$1 $2');//inserts a space between capital letter and lowercase letter that preceeds it
spinalString = spinalString.replace(whiteSpace, "-"); //replaces spaces with -
spinalString = spinalString.replace(nonLetters, "-"); //replaces _ with -
spinalString = spinalString.toLowerCase();//puts all letters to lowercase

  return spinalString;
}

spinalCase('This Is Spinal Tap');