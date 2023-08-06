// Codewars Kata7 Solutions

// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    return str.toLowerCase().match(/x/g || [])?.length === str.toLowerCase().match(/o/g || [])?.length;
}
console.log(XO('zzss'))