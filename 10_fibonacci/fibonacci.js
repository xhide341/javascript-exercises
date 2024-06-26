// num is the Nth number of the sequence

const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    
    let current = 0;
    let prev = 1;

    for (i = 0; i < num; i++) {
        let next = current + prev;
        prev = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;