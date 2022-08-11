import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList'
import { TodoItem } from '../TodoItem';
import { CreateTodoButton} from '../CreateTodoButton'

function AppUI({
    loading,
    error,
    todosTotal,
    countCompleted,
    searchValue, 
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    }){



    return(
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
        {error  && <p>Hubo un error!</p>}
        {loading  && <p>Estamos cargando...</p>}
        {(!loading  && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} info={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text)} onDeleteTodo={()=> deleteTodo(todo.text)}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
    )
}

export { AppUI }