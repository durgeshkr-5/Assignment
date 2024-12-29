// Problem Statement: Write a program to calculate the simple interest for given principal, rate, and time. The formula for calculating simple interest is: Simple Interest = (P X R X T)/100

function calculateSimpleInterest(principal, rate, time) {
  if (principal === 0 || rate === 0 || time === 0) {
    console.log(`The simple interest is: ${(0).toFixed(2)}`);
    return;
  }

  if (principal < 0 || rate < 0 || time < 0) {
    console.log(`Invalid input, all values must be non-negative.`);
    return;
  }

  let interest = ((principal * rate * time) / 100).toFixed(2);
  console.log(`The simple interest is: ${interest}`);
}

calculateSimpleInterest(1000, 5, 3);
calculateSimpleInterest(1500, 7, 5);
calculateSimpleInterest(0, 6, 2);
