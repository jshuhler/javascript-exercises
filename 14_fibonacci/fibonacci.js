 const fibonacci = function(n) {
    if (n < 0) {
        console.log("OOPS");
        return "OOPS";
    } else if (n == 0) {
        console.log(0);
        return 0;
    } else if (n === 1) {
        console.log(1);
        return 1;
    } else {
        let fibArray = [1,1]; 
        let fibPosition = n - 1;        
        for (let i = 0; i < n - 1; i++) {
            let num = fibArray[i] + fibArray[i + 1];
            fibArray.push(num);
        }
        console.log(fibArray[fibPosition]);
        return fibArray[fibPosition];
    }
};

// fibonacci("1");
console.log(fibArray[-1]);

// Do not edit below this line
module.exports = fibonacci;