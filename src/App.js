import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton} from './CreateTodoButton'
//import './App.css';

const defaultTodos=[
  {text: 'cortar cebolla', completed: true},
  {text: 'tomar el curso de introduccion a react', completed: false},
  {text: 'llorar con la llorona', completed: false}
]

let searchedTodos = []

function App() {
 
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
          <TodoItem key={todo.text} info={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  )
}

export default App;
