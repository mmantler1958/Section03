// TODO: using the function expressions below, refactor them into function declarations
const greet = function () {
  console.log('Hello!');
};
//refactored
function greet() {
  console.log('Hello!');
}

const threeModTwo = function () {
  console.log(3 % 2);
};
// refactored
function threeModTwo() {
  console.log(3 % 2);
}
let age = 18;

const checkDrivingAge = function () {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};
//refactored
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
