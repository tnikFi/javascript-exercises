const sumAll = function(start, end) {
    if (typeof(start) != "number" || typeof(end) != "number") {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    }

    let sum = 0;
    if (start <= end) {
        for (let i = start; i < end+1; i++) {
            sum += i;
        }
    } else {
        for (let i = end; i < start+1; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
