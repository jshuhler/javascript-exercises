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
- take in 2 numbers
- find the lower and upper nums
- if either number < 0, return error
- if either number is not a whole number, return error
- otherwise, sum the numbers between lowerNum and upperNum
- return the sum

# current issues (11/26)
- when it passes an error, the sum still happens. need to add a return...somewhere to get that to stop