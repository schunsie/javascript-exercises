const removeFromArray = function(rawArray) {
    const itemsToRemove = Array.prototype.slice.call(arguments, 1);
    
    const array = rawArray.filter(isWanted);
    return array;


    function isWanted(item) {
        for (let unwantedItem of itemsToRemove) {
            if (item === unwantedItem)
                return false;
        }
        return true;
    }
}

// Do not edit below this line
module.exports = removeFromArray;
