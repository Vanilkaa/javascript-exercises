const fibonacci = function(num) {
    if(+num < 0) return "OOPS";
    if(+num == 0) return 0;
    const fib = [1, 1];
    for(let i = 0; i < +num - 2; i++) {
        fib.push(fib.at(-1)+fib.at(-2));
    }
    return fib.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
