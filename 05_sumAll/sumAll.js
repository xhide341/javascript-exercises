const sumAll = function(startNum, lastNum) {
    let result = 0;
    if (typeof(startNum) === 'number' && typeof(lastNum) === 'number' && startNum >= 0 && lastNum >= 0) {
        if (startNum > lastNum) {
            for (let i = startNum; i >= lastNum; i--) {
                result += i;
            }
        } else if (startNum < lastNum) {
            for (let i = startNum; i <= lastNum; i++) {
                result += i;
            }
        } else {
            return 'ERROR';
        }
        return result;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
