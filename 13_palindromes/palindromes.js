// const palindromes = function () {

// };

// initial variables
let string = "Lid off a daffodil."
let punctuation = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// lowercase string
let stringLower = string.toLowerCase();

// string to array
let arr = stringLower.split("");

// remove punctuation
let arrNoPunc = arr.filter(char => {
    return !punctuation.includes(char);
});

// remove spaces - change arr.filter to arrNoPunc.filter when the above function is ready
let arrNoSpaces = arr.filter((items) => {
    let spaces = " ";
    return items !== spaces;
});

// reverse arrNoSpaces 
let arrNoSpacesReverse = arrNoSpaces.toReversed();

// change the arrays back to strings
let noSpaces = arrNoSpaces.join('');
let noSpacesReverse = arrNoSpacesReverse.join('');

// check the new strings
// const palindromes = function (noSpaces,noSpacesReverse) {
//     if (noSpaces === noSpacesReverse) {
//         console.log(palindromes);
//         return true;
//     } else {
//         console.log(palindromes);
//         return false;
//     };
// };

const palindromes = function () {
    return noSpaces === noSpacesReverse;
};

palindromes("string");