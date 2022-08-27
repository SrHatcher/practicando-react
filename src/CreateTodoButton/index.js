import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState)
    }

    return(
        <>
            <div className="contenedor-botonAdd">
                <button className="CreateTodoButton"
                    onClick={onClickButton}
                >+</button>
            </div>
        </>
    )
}

export {CreateTodoButton}