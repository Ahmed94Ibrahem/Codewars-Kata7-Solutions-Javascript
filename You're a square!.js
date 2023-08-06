// Codewars Kata7 Solutions

// You're a square!

// That's it! You just have to check if your number of building blocks is a perfect square.


var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(26));