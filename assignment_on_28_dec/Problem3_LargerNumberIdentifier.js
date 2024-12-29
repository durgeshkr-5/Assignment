// Problem Statement: Write a program that compares two input numbers and determines which one is larger or if they are equal.

function findLarger(num1, num2) {
  if (num1 === num2) {
    console.log("Both numbers are equal");
  } else if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}`);
  } else {
    console.log(`${num2} is larger than ${num1}`);
  }
}

findLarger(5, 10);
findLarger(7, 7);
findLarger(-1, -10);
