const repeatString = function(string, number) {
    let text = '';
    if (number >= 0) {
        for (i = 0; i < number; i++) {
            text += string;
        }
    } else {
        text = 'ERROR';
    }

    return text;
};

// Do not edit below this line
module.exports = repeatString;
