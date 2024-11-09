const sumAll = function(...numbers) {
    if (!numbers.every(validateArgument)) {
        return 'ERROR';
    }

    sortRange(numbers);
    
    let startNum = numbers[0];
    let endNum = numbers[1];
    let sum = 0;
    
    for (let num = startNum; num <= endNum; num++) {
        sum += num;
    }
    return sum;
}

function validateArgument(arg) {
    if (typeof(arg) == 'number' && arg >= 0) {
        return Number.isInteger(arg) ? true : false;
    }

    return false;
};

function sortRange(array) {
    if (array[0] > array[1]) {
        array.reverse();
    }
    return array;
};

// Do not edit below this line
module.exports = sumAll;
