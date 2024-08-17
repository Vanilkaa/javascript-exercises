const findTheOldest = function(array) {
    array.forEach((a) => {
        if(a.yearOfDeath === undefined) a.yearOfDeath = new Date().getFullYear()
        });
    array.sort((a, b) => (a.yearOfDeath-a.yearOfBirth) - (b.yearOfDeath-b.yearOfBirth));
    return array.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
