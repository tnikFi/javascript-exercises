const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((previous, current) => previous + current, 0);
};

const multiply = function(array) {
  return array.reduce((previous, current) => previous * current)
};

const power = function(base, exp) {
	let result = 1;
  for (var i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for (var i = number; i > 0; i--) {
    result *= i;
  }
  return result;
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
