const palindromes = function (string) {
    let chars = string.toLowerCase().split("").filter(char => /^[a-zA-Z0-9]$/.test(char));
    let stripped = chars.join("");
    let reversed = chars.reverse().join("");
    return stripped == reversed;
};

// Do not edit below this line
module.exports = palindromes;
