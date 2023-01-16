// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


// Convert the string into Array
// Convert The Strings into Numbers
// Get the Highest and lowest numbers
// Return as String
function highAndLow(numbers){
    // let numbersArray = numbers.split(' ').map((n) => Number(n))
    // let highestNumber = Math.max(...numbersArray);
    // let lowestNumber = Math.min(...numbersArray);
    // return `${highestNumber} ${lowestNumber}`;
    let numbersArray = numbers.split(' ').map((n) => Number(n)).sort((a,b) => a - b);
    return `${numbersArray[numbersArray.length - 1]} ${numbersArray[0]}`;
  }
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))