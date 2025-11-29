# Exercise 09 - sumAll

Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

- How will you ensure you're summing all integers within the correct range, no matter the order of the inputs?

- Think about your sum's starting value. Then, how can you make sure every single number from the smaller input to the larger one (including both) gets added to it?

# notes
- could probably use some kind of loop to count up until the higher number is reached. do while, while, something like that?
- the tests include receiving the higher number first, is there a way to sort them maybe?
- could try and figure out a way to create an array of numbers between the two passed parameters, then use the reduce method to sum them together?

# pseudocode
- [x] take in 2 numbers
- [x] find the lower and upper nums
- [ ] check edge cases for incorrect elements:
    - [ ] if either number < 0, return error and don't run any more code
    - [ ] if either number is not a whole number (num % 1 !== 0), return error and don't run any more code
    - [ ] if either number is not an integer, return error and don't run any more code
- [x] otherwise, sum the numbers between lowerNum and upperNum
- [x] return the sum

# current issues (11/26)
- when it passes an error, the sum still happens. need to add a return...somewhere to get that to stop

**Code before trying to put everything in the for loop:**
const sumAll = function(num1, num2) {
    let sum = 0
    lowerNum = Math.min(num1, num2);
    upperNum = Math.max(num1, num2);
    
    if (num1 < 0 || num2 < 0) {
        console.log('ERROR');
    } else if (num1 % 1 !== 0 || num2 % 1 !== 0) {
        console.log('ERROR');
        // need to figure out how to make sure something is an integer too, it shouldn't accept "90" as a variable
    } else if (!Number.isInteger(num1) || Number.isInteger(num2)) {
        console.log('ERROR');
    };
    
    for (let i = lowerNum; i <= upperNum; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
    };
// }

sumAll(-10, 4);

// Do not edit below this line
module.exports = sumAll;

**Code before trying to put the for loop in an else statement:**
const sumAll = function(num1, num2) {
    let sum = 0
    lowerNum = Math.min(num1, num2);
    upperNum = Math.max(num1, num2);
    
    if (num1 < 0 || num2 < 0) {
        console.log('ERROR');
    } else if (num1 % 1 !== 0 || num2 % 1 !== 0) {
        console.log('ERROR');
        // need to figure out how to make sure something is an integer too, it shouldn't accept "90" as a variable
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        console.log('ERROR');
    };
    
    for (let i = lowerNum; i <= upperNum; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
    };
// }

sumAll(-10, 4);