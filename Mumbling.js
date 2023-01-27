// Mumbling
// This time no story, no theory. The examples below show you how to write function

// Solution

// Convert the string to Lower Case
// Convert the string into Array
// Loop through the array
// Catch the letter and convert it to Upper case and Repeat the rest

function accum(s) {
	return s.toLowerCase().split('').map((letter, i) => letter.toUpperCase() + letter.repeat(i)).join('-');
}
console.log(accum('ZpglnRxqenU'));