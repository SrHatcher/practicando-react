import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton} from './CreateTodoButton'
//import './App.css';

const todos=[
  {text: 'cortar cebolla', completed: true},
  {text: 'tomar el curso de introduccion a react', completed: false},
  {text: 'llorar con la llorona', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} info={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  )
}

export default App;
