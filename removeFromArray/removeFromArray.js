// const removeFromArray = function (array, ...theArgs) {
//     let argsArray = Array.from(theArgs);
//     while (argsArray.length > 0) {
//         array = array.filter(elem => elem != argsArray.pop());
//     }

//     return array;

// }

const removeFromArray = function (array, ...theArgs) {
    let argsArray = Array.of(theArgs);
    while (argsArray.length > 0) {
        array = array.filter(function (value, index, arr) {
            return value != argsArray.pop();
        });
    }

    return array;

}

module.exports = removeFromArray
