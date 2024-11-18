const palindromes = function (rawWord) {
    const word = rawWord
    .split('')
    .filter(char => !".,?!".includes(char))
    .filter(char => char != ' ')
    .join('')
    .toLowerCase();

    const reversed = word.split('').reverse().join('');
    return word == reversed;
};

// Do not edit below this line
module.exports = palindromes;
