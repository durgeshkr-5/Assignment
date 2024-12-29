// Problem Statement: Create an array that represents your daily to-do list with 5 tasks. Add a new task to the beginning of the list. Then, remove the last task from the list. Finally, log the updated to-do list to the console.

const dailyRoutine = ["task 1", "task 2", "task 3", "task 4", "task 5"];

// Add a task in the beginning of list
dailyRoutine.unshift("new task");

// remove the last task from list
dailyRoutine.pop();

console.log("List of Daily Routine  : ", dailyRoutine);
