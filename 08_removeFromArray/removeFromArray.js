// const removeFromArray = function(arr, a) {
//     // function keepElement(num) {
//     //     return a !== num;
//     // }
//     // return arr.filter(keepElement);
//     return arr.filter((num) => a !== num);
// };

// console.log(removeFromArray([1, 2, 3, 4], 3));

const removeFromArray = function(originalArr,...args) {
    return originalArr.filter((num) => {
        for (let i = 0; i < args.length; i++) {
            if (num === args[i]) {
                return false;
            }
        }
        return true;
    });
}

console.log(removeFromArray([1, 2, 3], "1", 3));

// const removeTesting = function(originalArr, arg) {
//     return !originalArr.includes(arg);

// }

// console.log(removeTesting([1,2,3],3));

