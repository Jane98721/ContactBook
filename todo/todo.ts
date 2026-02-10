import type { listen } from "node:quic";
import readline from "readline"

//store todo in an array

type Todo = {
  id: number;
  text: string;
}

let todos: Todo [] = [];

// create readline interface

const rl = readline.createInterface({
  input: process.stdin, //listens to what we type
  output: process.stdout // shows messages on the screen
})

//Create

const addTodo = () => {
  rl.question("Enter todo:", (text:string) => {
    if(text.trim() === "") {
      console.log("Todo can not be empty")
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        text: text.trim(),
      }
      todos.push(newTodo)
      console.log("Todo is added successfully")
    }
      showMenu()
  })
}

//Read all todos

const readTodos = () : void => {
if(todos.length === 0) {

  console.log('You have no todos')

} else {

  console.log('You have the following todos: \n' );
  todos.forEach((todo: Todo) => {

    console.log(`${todo.id} - ${todo.text}`)

  })
  }

  process.stdout.write(">")
  rl.question("", (command:string) => {
    handleCommand(command)
  })
}

//Update todo

const updateTodo = () => {

rl.question("which todo would you like to update? please enter the id of the task \n", 
  (input:string) => {

    const id: number = parseInt(input)

    const task = todos.find(todo => todo.id === id)


    if(!task){
      console.log('Task not found')
      showMenu()
  
    } else {
      rl.question("write a new task \n", (newTask:string) => {
        task.text = newTask
        console.log('Task updated successfully')
        showMenu()
      })
    }
  })
}

  
//Delete todo

const deleteTodo = () => {
  rl.question("which todo would you like to delete?", (input: string) => {
    const id: number = parseInt(input)

    const updatedTodos: Todo [] = todos.filter((todo: Todo) => {
      todo.id !== id
    })

    if(updatedTodos.length === todos.length){
      console.log("Task not found")
    } else {
      todos = updatedTodos;
      console.log('Todo removed successfully')
    }
    process.stdout.write(">")
    rl.question("", (command:string) => {
    handleCommand(command)
  })
  })
}

//Command

const handleCommand = (command: string) : void => {
  switch(command.trim().toLowerCase()) {
    case "add":
      addTodo()
      break;
    case "read":
      readTodos()
      break;
     case "update":
      updateTodo()
      break;
    case "delete":
      deleteTodo()
      break;
    case "exit":
      console.log("Goodbye")
      rl.close()
      break;
    default:
      console.log("Unknown command")
      showMenu()
  }
}


//menu

const showMenu = () => {
console.log("\n === Todo List App ===")
console.log("Commands: add, read, update, delete, exit \n");
process.stdout.write(">")

rl.question("", (command:string) => {
  handleCommand(command)
})
}

//show the menu on startup

showMenu()

