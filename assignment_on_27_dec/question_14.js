// You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks. Implement the following operations without using specific method references:

// Remove the first task from the list.
// Add two new high-priority tasks to the beginning of the list.
// Replace the last task in the list with a new task.
// Log the updated task list after all operations.

const listOfTask = ["task 1", "task 2", "task 3", "task 4", "task 5"];

// remove first task
listOfTask.shift();

// add two high priority task
listOfTask.unshift("high priority task 1", "high priority task 2");

// replace last task
listOfTask[listOfTask.length - 1] = "new task";

console.log(`Updated list :  ${listOfTask}`);
