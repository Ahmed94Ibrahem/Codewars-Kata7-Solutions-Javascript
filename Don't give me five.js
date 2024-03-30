// Don't give me five

// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Solution

// Create an empty variable
// Loop through the start and end
// Check if the current number contains "5"
// Count all except "5" numbers

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).includes("5")) {
      count++;
    }
  }
  return count;
}

console.log(dontGiveMeFive(1, 9));
