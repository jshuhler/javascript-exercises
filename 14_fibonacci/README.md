# Exercise 14 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
> In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
> To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

```javascript
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
```
# Notes
- passed a single number, need to find the value of the Fibonacci sequence at that position
- need to generate the F. sequence out to that number in an array, then return the value of that element
    - creating the sequence is probably a reduce function? but kind of in reverse?
    - could just be a math function that pushes a value to the array
    - for loop that pushes the value to the array until it hits the given n