const removeFromArray = function (array, ...theArgs) {
    let argsArray = Array.from(theArgs);
    for (i = 0; i < argsArray.length; i++) {
        index = array.indexOf(argsArray[i]);
        if(index != -1){
            for (j = index; j < array.length - 1; j++) {
                array[j] = array[j+1];
            }
            array.pop();
        }
    }

    return array;

}
/*couldn't get array.filter to work, but would like to know what i was doing wrong someday.
 * 
 */
// const removeFromArray = function (array, ...theArgs) {
//     let argsArray = Array.of(theArgs);
//     while (argsArray.length > 0) {
//         array = array.filter(function (value, index, arr) {
//             return value != argsArray.pop();
//         });
//     }
//     return array;

// }

module.exports = removeFromArray
