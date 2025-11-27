const repeatString = function repeatString(string, num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         if (num < 0) {
//             arr.push('ERROR');
//             break;
//         } else {
//         arr.push(string);
//         }
//     }
//     console.log(arr.join(""));
// };

    let arr = [];
    if (num < 0) {
        arr.push('ERROR');
    } else {
        for (let i = 0; i < num; i++) {
            arr.push(string);
        }
    }
    return(arr.join(""));
};

repeatString('hey', 1);

// Do not edit below this line
module.exports = repeatString;