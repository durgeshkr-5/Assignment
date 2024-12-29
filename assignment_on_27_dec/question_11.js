// Create an array that stores the temperatures recorded over 7 days. Use indexing to access the temperature for the 4th day and update it to a new value by adding 2 degrees. After that, log the updated temperatures for all 7 days to the console.

const temperature = [12, 23, 11, 17, 15, 16, 9];

temperature[3] = temperature[3] + 2;

for (let i = 0; i < temperature.length; i++) {
  console.log(`Day-${i + 1} temperature is :  ${temperature[i]}`);
}
