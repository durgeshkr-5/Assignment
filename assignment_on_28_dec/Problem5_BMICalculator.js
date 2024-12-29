// Problem Statement: Create a program to calculate the Body Mass Index (BMI) based on user input for weight in kilograms and height in meters.
// Calculate the BMI using the formula: BMI = Weight/(Height * Height)

function calculateBMI(weight, height) {
  if (weight === 0 || height === 0) {
    console.log("Invalid input, height or weight cannot be zero");
    return;
  }
  if (weight < 0 || height < 0) {
    console.log("Invalid input, height and weight must be positive numbers.");
    return;
  }

  let BMI = (weight / (height * height)).toFixed(2);
  console.log(`Your BMI is: ${BMI}`);
}

calculateBMI(70, 1.75);
calculateBMI(55, 1.6);
calculateBMI(90, 1.8);
