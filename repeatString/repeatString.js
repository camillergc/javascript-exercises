// const repeatString = function (string, num) {
//     let repeatedString = ``;
//     for (i = 0; i < num; i++) {
//         repeatedString = repeatedString + string;
//     }
//     return repeatedString;
// }

const repeatString = function (string, num) {
    if (num < 0) {
        return `ERROR`;
    }

    if (num == 0) {
        return ``;
    }

    if (num == 1) {
        return string;
    }

    return string + repeatString(string, num - 1);

}


module.exports = repeatString
