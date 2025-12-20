const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((init, current) => {
    return init + current;
  }, 0)
};

const multiply = function(arr) {
	return arr.reduce((init, current) => {
    return init * current;
  }, 1)
};

const power = function(a,b) {
  return a ** b;
};

// const factorial = function(n) {
//   let arr = [];
//   if (n === 0) {
//     arr.push(1);
//   } else {
//     for (let i = n; i <= n; i--) {
//       arr.push(i);
//       if (i === 1) {
//         // console.log(arr);
//         break;
//       };
//     };
//   };
//   let reduction = arr.reduce((init,current) => {
//     return init * current;
//     }, 1);
//     console.log(reduction);
//   return reduction;
// };

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

factorial(0);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
