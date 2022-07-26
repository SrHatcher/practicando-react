import React from "react";
import "./todoForm.css"

function TodoForm({addTodo, setOpenModal}){
    const [newTodoValue, setNewTodoValue]=React.useState("")

    const onChange=(event)=>{
        setNewTodoValue(event.target.value)
    }
    
    const onCancel = ()=>{
        setOpenModal(false)
    }

    const onSubmit= (event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea
                placeholder="Cortar la cebolla para el almuerzo" value={newTodoValue} onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }