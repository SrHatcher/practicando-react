import React from "react";
import "./icon.css"
import {TodoContext} from "../todoContext"



function TodoIcon(props){
    const {completeTodo, deleteTodo} = React.useContext(TodoContext)

    let clase;
    if(props.tipo==="check"){
        clase="check"
    }else{
        clase="cerrar"
    }

    return(
         <>
            <span className={`${clase} ${props.completed && 'check-completed'}`} onClick={()=> {
                    if(props.tipo==="check"){
                        completeTodo(props.info)
                    }else{
                        deleteTodo(props.info)
                    }
                }}></span>
         </>
    )
}

export {TodoIcon}