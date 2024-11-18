const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce( (sum, currentValue) => sum + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce( (product, currentValue) => product * currentValue, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	let product = 1; 
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
