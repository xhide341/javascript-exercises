const palindromes = function (string) {
    
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, '');

    const reversedString = cleanString.split('').reverse().join('');

    return cleanString.toLowerCase() === reversedString.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
