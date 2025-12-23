// let string = "Lid off a daffodil."
let punctuation = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

const palindromes = function (string) {
    // let stringLower = string.toLowerCase();
    // let arr = stringLower.split("");
    let arr = string
        .toLowerCase()
        .split("");
    let arrCleaned = arr
        .filter (char => !punctuation.includes(char))
        .filter (items => items !== " ")
    let arrCleanedReverse = arrCleaned.toReversed();
    let noSpaces = arrCleaned.join('');
    let noSpacesReverse = arrCleanedReverse.join('');
    console.log(noSpaces === noSpacesReverse);
    return noSpaces === noSpacesReverse;
};

// palindromes("racecar.");

module.exports = palindromes;