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
import { TodoFooter } from '../TodoFooter';
import { TodoBackground } from "../TodoBackground"

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

  console.log(searchedTodos)
  return(
    <React.Fragment>
      
      <TodoTitle>
        <h1>TO-DO Machine</h1>
        <h3>By Sr.Hatcher</h3>
      </TodoTitle>
      <TodoBackground/>
      <TodoCounter>
        <p>Has completado</p>
          <h2>{ completedTodos } de { totalTodos }</h2>
        <p>Tareas pendientes</p>
      </TodoCounter>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue }/>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}

        onError={()=> <p className='p-todoList'>Hubo un Error!</p>}
        onLoading={()=><Skeleton/>}
        onEmptyTodos={()=><p className='p-todoList'>Crea tu Primer TO-DO</p>}
        render={todo=>(
            <TodoItem
            key={todo.text} 
            info={todo.text} 
            completed={todo.completed} 
            completeTodo={completeTodo}  
            deleteTodo={deleteTodo}
            />
          )
        }
        createButton={()=><CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />}
      />

      {!!openModal && 
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}></TodoForm>
        </Modal>
      }
      
      <TodoFooter>
        <p>Proyecto del curso de introduccion a React</p>
      </TodoFooter>
    </React.Fragment>
    )
}

export default App;
