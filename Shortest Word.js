// Codewars Kata7 Solutions

// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solution

// Convert the String into An Array
// Loop through the Array
// Check on the Shortest Length

function findShort(s){
    return Math.min(...s.split(' ').map((word) => word.length));
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));