const findTheOldest = function(array) {
    const currentYear = (new Date()).getFullYear();
    array.sort((a, b) => {
        return calcAge(b) - calcAge(a);
    });

    function calcAge(person) {
        return person.yearOfDeath ? 
        age = person.yearOfDeath - person.yearOfBirth
        : age = currentYear - person.yearOfBirth;
    }

    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
