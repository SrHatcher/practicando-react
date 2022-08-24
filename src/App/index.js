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
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
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

      <CreateTodoButton 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    )
}

export default App;
