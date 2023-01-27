// Jaden Casing Strings

// Your task is to convert strings to how they would be written by Jaden Smith. 

// The strings are actual quotes from Jaden Smith, 

// but they are not capitalized in the same way he originally typed them.

// Solution

// Convert the string into Array
// Loop through the array
// Capitalize each word
// Convert it back into string

String.prototype.toJadenCase = function () {
    return this.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
}
let str = 'How can mirrors be real if our eyes aren\'t real'
console.log(str.toJadenCase());