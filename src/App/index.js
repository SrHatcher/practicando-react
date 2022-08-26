import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList'
import { TodoItem } from '../TodoItem';
import { CreateTodoButton} from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";
import { Skeleton } from "../Skeleton"
import { useTodos } from "./useTodos"
import { TodoTitle } from "../TodoTitle"

function App() {
  const {
    error,
    loading,
    searchedTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue, 
    addTodo, 
    completeTodo,
    deleteTodo,
  } = useTodos();

  console.log(totalTodos, completedTodos)

  return(
    <React.Fragment>
      <TodoTitle>
        <h1>TO-DO Machine</h1>
        <h3>By Sr.Hatcher</h3>
      </TodoTitle>
      <TodoCounter>
        <p>Has completado</p>
          <h2>{ completedTodos } de { totalTodos }</h2>
        <p>Tareas pendientes</p>
      </TodoCounter>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue }/>
      <TodoList>
        {error  && <p>Hubo un error!</p>}
        {loading  && <Skeleton />}
        {(!loading  && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} info={todo.text} completed={todo.completed} completeTodo={completeTodo}  deleteTodo={deleteTodo}/>
        ))}
      </TodoList>

      {!!openModal && 
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}></TodoForm>
        </Modal>
      }

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      
    </React.Fragment>
    )
}

export default App;
