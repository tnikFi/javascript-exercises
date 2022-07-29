const findTheOldest = function(array) {
    return array.reduce((prev, curr) => {
        let prevAge = prev.yearOfDeath ? prev.yearOfDeath-prev.yearOfBirth : new Date().getFullYear() - prev.yearOfBirth;
        let currAge = curr.yearOfDeath ? curr.yearOfDeath-curr.yearOfBirth : new Date().getFullYear() - curr.yearOfBirth;
        return prevAge > currAge ? prev : curr;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
