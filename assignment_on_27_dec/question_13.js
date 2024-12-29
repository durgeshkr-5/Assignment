// Problem Statement: You are creating a score management system for student results. Start with an array of 10 student scores. The program should do the following:

// For any student with a score below 40, increase their score by 20. For students with scores over 90, adjust their score to a maximum of 90. Count and log how many students passed (score of 50 or more) after the adjustments. Log the final adjusted array of scores.

const marksOfTenStudent = [94, 78, 23, 15, 35, 38, 62, 88, 91, 45];
let countPassedStudent = 0;

for (let i = 0; i < marksOfTenStudent.length; i++) {
  // adjust marks if below 40
  if (marksOfTenStudent[i] < 40) {
    marksOfTenStudent[i] += 20;
  }
  //   adjust marks if over 90
  if (marksOfTenStudent[i] > 90) {
    marksOfTenStudent[i] = 90;
  }
  //   count passed student if marks >= 50
  if (marksOfTenStudent[i] >= 50) {
    countPassedStudent++;
  }
}

console.log(`Updated Marks of Ten student  :  ${marksOfTenStudent}`);
console.log(`Number of passed student : ${countPassedStudent}`);
