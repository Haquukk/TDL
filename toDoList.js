const { describe } = require("node:test");
const rl = require("readline");

class Task {
  constructor(id, description, status = "todo") {
    this.id = id;
    this.description = description;
    this.status = status;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  update(newDescription) {
    this.description = newDescription;
    this.updatedAt = new Date();
  }

  changeStatus(newStatus) {
    this.status = newStatus;
    this.updatedAt = new Date();
  }
}

const tasks = [];
let taskIndex = 1;

const add = (description) => {
  const newTask = new Task(taskIndex++, description);
  tasks.push(newTask);
};

const update = (id, newDescription) => {
  const task = tasks.find((t) => t.id === id);
  task.update(newDescription);
  if (task) return (task.description = newDescription);
};

const deleteTask = (id) => {
  const taskId = tasks.findIndex((i) => i.id === id);
  if (taskId !== -1) return tasks.splice(taskId, 1);
};

const markDone = (id) => {
  const task = tasks.find((t) => t.id === id);
  task.changeStatus("done");
  if (task) return (task.status = "done");
};

const markInProgress = (id) => {
  const task = tasks.find((t) => t.id === id);
  task.changeStatus("in-progress");
  if (task) return (task.status = "in-progress");
};

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const TaskManager = (input) => {
  const [command, ...args] = input.split(" ");

  switch (command) {
    case "add":
      add(args.join(" "));
      console.log(`Task added successfully (ID: ${taskIndex - 1})`);
      break;
    case "update":
      const updateSuccess = update(parseInt(args[0]), args.slice(1).join(" "));
      console.log(
        updateSuccess ? "Task updated successfully" : "Task not found"
      );
      break;
    case "delete":
      deleteTask(parseInt(args[0]));
      break;
    case "mark-in-progress":
      const markInProgressSuccess = markInProgress(parseInt(args[0]));
      console.log(
        markInProgressSuccess ? "Task marked as in progress" : "Task not found"
      );
      break;
    case "mark-done":
      const markDoneSuccess = markDone(parseInt(args[0]));
      console.log(markDoneSuccess ? "Task marked as done" : "Task not found");
      break;
    case "exit":
      readline.close();
      break;
    default:
      console.log(command !== "list" && "no commant");
  }

  if (command === "list") {
    if (tasks.length) {
			const taskDone = tasks.filter((t) => t.status === "done");
      const taskInProgress = tasks.filter((t) => t.status === "in-progress");
			
      if (args.join(" ") === "") return console.log(tasks);
      if (taskDone && args.join(" ") === "done") {
        console.log(taskDone);
      } else if (taskInProgress && args.join(" ") === "in-progress") {
        console.log(taskInProgress);
      }
    } else {
      console.log("No tasks found");
    }
  }
};

console.log("welcome to CLI todolist");

readline
  .on("line", (input) => {
    TaskManager(input.trim());
    if (input.trim() !== "exit") {
      readline.prompt();
    }
  })
  .on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });

readline.prompt();
