import React from 'react'
import { AppUI } from './AppUI'

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
    <AppUI 
      todosTotal={todosTotal} 
      countCompleted={countCompleted}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
