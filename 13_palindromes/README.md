# Exercise 13 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

x lowercase string
x turn string to array
x remove punctuation - against a predefined list - ! " # $ % & ' ( ) * + , - . / : ; ? @ [ \ ] ^ _ ` { | } ~ 
x remove any spaces from the array
    filter  
x reverse the array to a new array
x convert each lowercase, no psace, no punc array back to a string
x compare the new strings

remove from array
```js
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
```
