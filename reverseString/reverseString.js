const reverseString = function (string) {
    if (string === ``) {
        return ``;
    }

    return string.charAt(string.length - 1) +
        reverseString(string.substr(0, string.length - 1));

}

module.exports = reverseString
