// Odd or Even

// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Solution

// Sum All Numbers
// Check if the sum % 2 === 0

function oddOrEven(array) {
  if (!array.length) return "even";
  const sum = array.reduce((acc, current) => acc + current);
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 4]));
