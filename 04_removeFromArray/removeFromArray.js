const removeFromArray = function(array) {
    const args = Array.from(arguments);
    const result = [];
    for(let i = 0; i < array.length; i++) {
        if(!args.includes(array[i], 1)) result.push(array[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
