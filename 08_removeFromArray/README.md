# Exercise 08 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

See if you can make use of some built-in array methods in this exercise.

## Hints

The first test on this one is fairly easy, but there are a few things to think about (or google) here for the later tests:

- you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
- how to remove a single element from an array
- how to deal with multiple optional arguments in a JavaScript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

# notes
## initial test
- filter method to find when a !== arr[i], which would return true, which would put the items that **do not** match the passed a into a new array

- this works to remove a single element, if the element is a number OR a string. 
```js
const removeFromArray = function(arr, a) {
    // function keepElement(num) {
    //     return a !== num;
    // }
    // return arr.filter(keepElement);
    return arr.filter((num) => a !== num);
};
```

Given an array and some number of other arguments
    Check if the first non-array argument is included in the array
        If it is, remove it (or do not include it in the new array)
    Repeat until all non-array arguments have been checked against the original array
    Return the array with the arguments removed