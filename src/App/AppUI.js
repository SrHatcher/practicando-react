import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from "../todoContext";
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList'
import { TodoItem } from '../TodoItem';
import { CreateTodoButton} from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";

function AppUI(){
  const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext)

    return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
            <TodoList>
            {error  && <p>Hubo un error!</p>}
            {loading  && <p>Estamos cargando...</p>}
            {(!loading  && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
    
            {searchedTodos.map(todo => (
              <TodoItem key={todo.text} info={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text)} onDeleteTodo={()=> deleteTodo(todo.text)}/>
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