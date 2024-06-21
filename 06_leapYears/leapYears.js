const leapYears = function(year) {
    // divisible by 400 and 4
    if (year % 4 === 0 && !(year % 100 === 0) || year % 400 === 0 ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
