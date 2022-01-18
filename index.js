function isPalindrome(string) {
  const length = string.length;
    for(let i = 0; i < length / 2; i++) {
      if(string[i] !== string[length - 1 - i]) {
    return false;
  }
}
return true;
}
/*const string = prompt("Enter a string: ");
const value = isPalindrome(string);
console.log(value);*/

/* 
  Add your pseudocode here
  Prompt to enter the word. 
  Write a function that will receive one argument a string. The function should be named isPalindrome.
  The function should only deal with lowercase strings.
  I will need a variable for the palindrome.
  It will return true if the string is a palindrome.
  It will return false if not a palindrome
  


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
