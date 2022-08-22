import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from "../todoContext";
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList'
import { TodoItem } from '../TodoItem';
import { CreateTodoButton} from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";
import { Skeleton } from "../Skeleton"

function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue
    } = React.useContext(TodoContext)

    return(
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          <TodoList>
            {error  && <p>Hubo un error!</p>}
            {loading  && <Skeleton />}
            {(!loading  && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

            {searchedTodos.map(todo => (
              <TodoItem key={todo.text} info={todo.text} completed={todo.completed}/>
            ))}
          </TodoList>


      {!!openModal && 
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      }

      <CreateTodoButton 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    )
}

export { AppUI }