let string = "Lid off a daffodil."
let punctuation = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

const palindromes = function () {
    let stringLower = string.toLowerCase();
    let arr = stringLower.split("");
    let arrNoPunc = arr.filter(char => {
        return !punctuation.includes(char);
    });
    let arrNoSpaces = arrNoPunc.filter((items) => {
        let spaces = " ";
        return items !== spaces;
    });
    let arrNoSpacesReverse = arrNoSpaces.toReversed();
    let noSpaces = arrNoSpaces.join('');
    let noSpacesReverse = arrNoSpacesReverse.join('');
    return noSpaces === noSpacesReverse;
};

// initial variables

// lowercase string


// string to array

// remove punctuation


// remove spaces - change arr.filter to arrNoPunc.filter when the above function is ready

// reverse arrNoSpaces 

// change the arrays back to strings


// compare the strings


palindromes("string");