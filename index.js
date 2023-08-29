function isPalindrome(word) {
  // Write your algorithm here
  const lowercaseWord = word;
  const arrayWord = lowercaseWord.split("");
  const reversedWord = arrayWord.reverse();
  const newWord = reversedWord.join("");

  if (newWord == word){
    return true
  }
  else{
    return false
  }
  
}

/* 
  Add your pseudocode here
  newWord = word (lowercase);
  newWord.split().reverse().join();
  if (newWord === word (lowercase))
    word isPalindrome => return True

  
*/

/*
  Add written explanation of your solution here
  0- Creating a ne variable to handle th new word.
  1- Converting the "word" to an array then Reverse it.
  3- Converting the array into string and join it.
  4- Comparing original word to the new word, 
    if they're the same => word isPalindrome.
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
