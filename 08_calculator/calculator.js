const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(nums) {
	let total = 0;
  for (let i=0; i<nums.length; i++){
    total = total + nums[i];
  }
  return total;
};

const multiply = function(nums) {
  let total = 1;
  for (let i=0; i<nums.length; i++){
    total = total * nums[i];
  }
  return total;
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
	let counter = num;
  let total = 1;
  while (counter > 0){
    total = counter * total;
    counter -= 1;
  }
  return total;
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
