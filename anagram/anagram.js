const Anagram = function (input) {
  this.value = input.toLowerCase();
};

Anagram.prototype.matches = function () {
  let words = [];
  if (arguments.length > 1) {
    words = Array.from(arguments);
  } else if (Array.isArray(arguments[0])) {
    words = arguments[0];
  } else {
    words.push(arguments[0]);
  }

  return words.filter(word => anagrams(word.toLowerCase(), this.value));
};

/**
 * Test if two words are anagrams.
 *
 * @param  {type} word1 - First word
 * @param  {type} word2 - Second word
 * @return {type} True if anagrams, false otherwise.
 */
const anagrams = (word1, word2) => {
  if (word1 === word2) {
    return false;
  } else {
    const remainingChars = Array
      .from(word1)
      .reduce(anagramReducer, word2.slice(0));
    
    return remainingChars.length === 0;
  }
};

/**
 * Remove char from remaining chars or add it if not present.
 *
 * @param  {string} remainingChars - Remaining chars
 * @param  {char} char - Char to remove
 * @return {string} Remaining chars
 */
const anagramReducer = (remainingChars, char) => {
  const indexOfChar = remainingChars.indexOf(char);
  if (indexOfChar > -1) {
    return remainingChars.slice(0, indexOfChar) + remainingChars.slice(indexOfChar + 1);
  } else {
    return remainingChars + char;
  }
};

module.exports = Anagram;