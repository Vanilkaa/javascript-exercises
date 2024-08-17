const palindromes = function (string) {
    let filter = [" ", "!", ",", "."];
    return string.toLowerCase()
        .split("") 
        .filter((char) => !filter.includes(char))
        .join("") == string.toLowerCase()
        .split("") 
        .filter((char) => !filter.includes(char))
        .reverse().join("");
};

console.log(palindromes("Race-car! "));

// Do not edit below this line
module.exports = palindromes;
