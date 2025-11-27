const sumAll = function(num1, num2) {
    //trying to create an array between the two passed numbers
    let sum = 0
    lowerNum = Math.min(num1, num2);
    upperNum = Math.max(num1, num2);
    
    if (num1 < 0 || num2 < 0) {
        console.log('ERROR');
    } else if (num1 % 1 !== 0 || num2 % 1 !== 0) {
        console.log('ERROR');
        //need to figure out how to make sure something is an integer too, it shouldn't accept "90" as a variable
    } else if (Number.isInteger(num1)) || (Number.isInteger(num2)) {
        console.log('ERROR');
    }
    
    for (let i = lowerNum; i <= upperNum; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
};

sumAll(10, [90, 1]);

// Do not edit below this line
// module.exports = sumAll;
