# Exercise 10 - leapYears

Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
>
> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```
Still confused? Refer to <cite>[this breakdown](https://time-and-calendar.com/leap-years/#:~:text=How%20to%20Know%20if%20Certain%20Year%20is%20a%20Leap%20Year)<cite> with examples.


## Hints
- use an `if` statement and `&&` to make sure all the conditions are met properly

# notes
- years divisible by 4 are leap years, unless they are divisible by 100 and not 400.
- years not divisible by 100 and not divisible by 400 are **not** leap years
- years not divisible by 100 and divisible by 400 are leap years

Another way of looking at it:
- a year is a leap year if it is divisible by 4, unless it's divisible by 100 but not by 400

- maybe need to work backwards?
# pseudocode
- if the year is divisible by 4, check next step
    -if not divisible by 4, print not leap year
- if the year is not divisible by 
- divisible by 4, not divisible by 100, divisible by 400
- divisible by 4, 

Note from Mao on discord:
"If it's divisible by 400, it's definitely a leap year. If not, then it's still a leap year if it's divisible by 4 but not 100."