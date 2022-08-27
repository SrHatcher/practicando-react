import React from "react";
import "./icon.css"

function IconComplete({info, completed, completeTodo, deleteTodo}){
    return(
        <span className={`check ${completed && 'check-completed'}`} onClick={()=> { completeTodo(info) }}></span>
    )
}

function IconDelete(){
    return(
        <div className="delete">X</div>
    )    
}

export {IconComplete, IconDelete}