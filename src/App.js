import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton} from './CreateTodoButton'

let searchedTodos = []

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue]= React.useState('')

  const countCompleted = todos.filter((todo)=> !!todo.completed).length
  const todosTotal = todos.length

  if(!searchedTodos.length >= 1){
    searchedTodos=todos
    console.log("no cambio el valor")
  }else{
    searchedTodos=todos.filter(todo=> {
      console.log("si cambio el valor")
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
    
  }

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text=== text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoCounter 
        todos={todosTotal} 
        completed={countCompleted}
      />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} info={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text)} onDeleteTodo={()=> deleteTodo(todo.text)}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  )
}

export default App;
