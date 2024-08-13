const leapYears = function(year) {
    return !(year % 100) && !(year & 400) || 
       (year % 100 && !(year % 4)) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
