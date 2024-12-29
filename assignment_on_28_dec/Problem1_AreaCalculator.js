// Problem Statement: Write a program that calculates the area of a triangle given the base and the height. The area is determined using the formula: Area = (Base X Height)/2

function areaOfTriangle(base, height) {
  if (base === 0 || height === 0) {
    console.log(`The area of the triangle is: ${(0.0).toFixed(2)}`);
    return;
  }

  if (base < 0 || height < 0) {
    console.log("Invalid number, base and height must be positive numbers");
    return;
  }

  let area = ((base * height) / 2).toFixed(2);
  console.log(`The area of the triangle is: ${area}`);
}

areaOfTriangle(10, 5);
areaOfTriangle(0, 15);
areaOfTriangle(8, 0);
areaOfTriangle(8, -5);
