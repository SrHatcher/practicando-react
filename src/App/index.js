import React from 'react'
import { AppUI } from './AppUI'

//const defaultTodos=[
//  {text: 'cortar cebolla', completed: true},
 // {text: 'tomar el curso de introduccion a react', completed: false},
//  {text: 'llorar con la llorona', completed: false}
//]

function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(()=>{
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem=initialValue
        }else{
          parsedItem=JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000);
  }, []);  

  const saveItem = (newItem)=>{
    try{
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    }catch(error){
      setError(error)
    }
  }



  return {item, saveItem, loading, error}
}

let searchedTodos = []

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue]= React.useState('')

  const countCompleted = todos.filter((todo)=> !!todo.completed).length
  const todosTotal = todos.length

  if(!searchedTodos.length >= 1){
    searchedTodos=todos
    //console.log("no cambio el valor")
  }else{
    searchedTodos=todos.filter(todo=> {
      //console.log("si cambio el valor")
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }



  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text=== text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI 
      loading={loading}
      error={error}
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
