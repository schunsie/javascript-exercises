const repeatString = function(stringToRepeat, amountOfRepeats) {
    if (amountOfRepeats < 0) return 'ERROR';
    
    let repeatedString = '';
    for (let i = 0; i < amountOfRepeats; i++) {
        repeatedString += stringToRepeat
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
