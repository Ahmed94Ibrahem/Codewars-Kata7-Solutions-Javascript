// Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Solution

// Exclude the last 4 characters from the string
// Get the length of the Charaters with last 4 characters excluded
// Repeat the # with the number
// Merge the # with the last 4 characters

function maskify(cc) {
  // const excludedChars = cc.slice(-4);
  // const maskedCharsLength = cc.length - excludedChars.length;
  //   const maskedChars = "#".repeat(maskedCharsLength);
  //   const finalResult = maskedChars + excludedChars;
  //   return finalResult;
  //   return cc.replace(/.(?=.{4})/g, "#");
  const maskedChars = cc.slice(1, -4);
  return maskedChars.replace(/[a-zA-Z0-9]/g, "#");
}

console.log(maskify("987654321"));
