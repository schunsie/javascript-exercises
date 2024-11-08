const reverseString = function(stringToReverse) {
    const stringArray = stringToReverse.split('');
    const reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
