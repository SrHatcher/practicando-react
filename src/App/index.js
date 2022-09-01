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
import {TodoHeader} from "../TodoHeader"
import { ChangeAlertWithStorageListener } from "../ChangeAlert"

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
    sincronize
  } = useTodos();

  return(
    <React.Fragment>
      <TodoHeader loading={loading}>
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
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue } />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}

        onError={()=> <p className='p-todoList'>Hubo un Error!</p>}
        onLoading={()=><Skeleton/>}
        onEmptyTodos={()=> <p className='p-todoList'>Crea tu primer TO-DO</p>}
        onEmptySearchResults={(searchText)=><p className='p-todoList'>No hay resultados para {searchText}</p>}
        createButton={()=><CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />}
      >
      {todo=>(
        <TodoItem
        key={todo.text} 
        info={todo.text} 
        completed={todo.completed} 
        completeTodo={completeTodo}  
        deleteTodo={deleteTodo}
        />
        )
      }
      </TodoList>

      {!!openModal && 
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}></TodoForm>
        </Modal>
      }

      <ChangeAlertWithStorageListener sincronize={sincronize}/>
      
      <TodoFooter>
        <p>Proyecto del curso de introduccion a React</p>
      </TodoFooter>
    </React.Fragment>
    )
}

export default App;
