https://roadmap.sh/projects/task-tracker

> node toDoList.js
welcome to CLI todolist
> add "Buy groceries"
Task added successfully (ID: 1)
> add "buy Car"
Task added successfully (ID: 2)
> update 1 "Buy groceries and cook dinner"
Task updated successfully
> mark-in-progress 1
Task marked as in progress
> mark-done 2
Task marked as done
> list
[
  Task {
    id: 1,
    description: '"Buy groceries and cook dinner"',
    status: 'in-progress',
    createdAt: 2024-09-23T14:55:51.063Z,
    updatedAt: 2024-09-23T14:56:44.907Z
  },
  Task {
    id: 2,
    description: '"buy Car"',
    status: 'done',
    createdAt: 2024-09-23T14:56:08.540Z,
    updatedAt: 2024-09-23T14:56:59.996Z
  }
]
> list done
[
  Task {
    id: 2,
    description: '"buy Car"',
    status: 'done',
    createdAt: 2024-09-23T14:56:08.540Z,
    updatedAt: 2024-09-23T14:56:59.996Z
  }
]
> list todo
[]
> list in-progress
[
  Task {
    id: 1,
    description: '"Buy groceries and cook dinner"',  
    status: 'in-progress',
    createdAt: 2024-09-23T14:55:51.063Z,
    updatedAt: 2024-09-23T14:56:44.907Z
  }
]
> exit
Goodbye!