const reverseString = function (string) {
    let charArray = string.split('');
    let reverseArr = charArray.reverse();
    return reverseArr.join('');
};

console.log(reverseString('hello bobby'));

// Do not edit below this line
module.exports = reverseString;
