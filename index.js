/* 
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 

Algorithm Challenge
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note. You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We’ll pass strings with varying formats, such as “racecar”, “RaceCar”, and “race CAR” among others.
*/

// Solution: 1 Simple solution wihout Regexp

function isSimplePalindrome(string) {
  var charactersArr = string.toLowerCase().split('');
  var validCharactor = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var lettersArr = [];

  charactersArr.forEach(c => {
    if (validCharactor.indexOf(c) > -1) lettersArr.push(c)
  });
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;

  return false;
}

// Running solution: 1 
console.log(isSimplePalindrome('race car')); // true


// Solution: 2 Using a for loop
function isPalindromeForLoop(string) {
  let cleanString = string.toLowerCase().replace(/[\W_]/g, ''); // or we can use /[^A-Za-z0–9]/g 
  let stringSize = cleanString.length
  let maxIteration = stringSize / 2;

  for (i = 0; i < maxIteration; i++) {
    if (cleanString[i] !== cleanString[stringSize - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Running solution: 2 
console.log(isPalindromeForLoop('A man, a plan, a canal. Panama')); // true


// Solution: 3 Using a for of loop 
function isPalindromeForOf(string) {
  var cleanString = string.toLowerCase().replace(/[\W_]/g, ''); // or we can use /[^A-Za-z0–9]/g 
  var stringArr = cleanString.split('');

  for (c of stringArr) {
    if (c !== stringArr.pop()) return false;
  }
  return true;
}

// Running solution: 3
console.log(isPalindromeForOf('never odd or even')); // true


// Solution: 4 Using split, reverse and join
function isPalindromeSpiltReveresJoin(string) {
  var cleanString = string.toLowerCase().replace(/[\W_]/g, ''); // or we can use /[^A-Za-z0–9]/g 
  var reverseString = cleanString.split('').reverse().join('');
  return cleanString === reverseString;
}

// Running solution: 4
console.log(isPalindromeSpiltReveresJoin('My age is 0, 0 si ega ym.')); // true


// Solution: 5 Using forEach
function isPalindromeForEach(string) {
  var cleanString = string.toLowerCase().replace(/[\W_]/g, ''); // or we can use /[^A-Za-z0–9]/g 
  var charCount = cleanString.length;
  var isPalindrome = true;

  cleanString.split('').forEach((c, i) => {
    if (c !== cleanString[charCount - 1 - i]) isPalindrome = false;
  });
  return isPalindrome;
}

// Running solution: 5
console.log(isPalindromeForEach('0_0 (: /-\ :) 0–0')); // true


// Solution: 6 Using map
function isPalindromeMap(string) {
  var cleanString = string.toLowerCase().replace(/[^A-Za-z0–9]/g, ''); // or we can use /[\W_]/g
  var charCount = cleanString.length;

  var letterMatched = cleanString.split('').map((c, i) => {
   
    return c === cleanString[charCount - 1 - i];
  });
  
  return letterMatched.every(m => m);
}

// Running solution: 6
console.log(isPalindromeMap('Eva, Can I Stab Bats In A Cave?'));


// Solution: 7 Using reduce
function isPalindromeReduce(string) {
  var cleanString = string.toLowerCase().replace(/[^A-Za-z0–9]/g, ''); // or we can use /[\W_]/g
  var charCount = cleanString.length;

  return cleanString.split('').reduce((match, c, i) => {
    if(!match) {
      return false;
    }
    return c === cleanString[charCount - 1 - i];
  }, true);
}

// Running solution: 7
console.log(isPalindromeReduce('A Man, A Plan, A Canal-Panama!'));


// Solution: 8 Using every
function isPalindromeEvery(string) {
  var cleanString = string.toLowerCase().replace(/[^A-Za-z0–9]/g, ''); // or we can use /[\W_]/g
  var charCount = cleanString.length;
  return cleanString.split('').every((c,i) => c == cleanString[charCount - 1 - i]);
}

// Running solution: 8
console.log(isPalindromeEvery('Mr. Owl Ate My Metal Worm'));


// Solution: 9 Using recursion
function isPalindromeRecursion(string) {
  var cleanString = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');  // or we can use /[\W_]/g
  var charCount = cleanString.length;

  if (charCount <= 1) {
    return true;
  }
  if (cleanString[0] === cleanString[charCount - 1]) {
    return isPalindromeRecursion(cleanString.slice(1, charCount -1));
  }
  return false;
}

// Running solution: 9
console.log(isPalindromeRecursion('A Santa Lived As a Devil At NASA'));

// Palindrome, Calculating the match percentage (proximity)

/* Instead of using some to check if there are any false values in the list, we can count the number of false values using filter.
Now we can divide the total length of the string with this number, and get the match percentage.
*/

function palindromeProximity(string) {
  var cleanString = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');  // or we can use /[\W_]/g
  var charCount = cleanString.length;

  var letterMatched = cleanString.split('').map((c, i) => {
    return c === cleanString[charCount -1 - i];
  });
  var matched = letterMatched.filter(m => m);
 
  var proximity = matched.length / charCount * 100;
  return proximity.toFixed(2);
}

// Testing Calculating the match percentage (proximity)
console.log(palindromeProximity('This may well at NASA'));


