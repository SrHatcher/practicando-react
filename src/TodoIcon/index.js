import React from "react";
import "./icon.css"

function IconComplete({info, completed, completeTodo, deleteTodo}){
    return(
        <span className={`check ${completed && 'check-completed'}`} onClick={()=> { completeTodo(info) }}></span>
    )
}

function IconDelete({info, deleteTodo}){
    return(
        <>
        <span className="delete" onClick={()=>{deleteTodo(info)}}>X</span>
        </>
    )    
}

export {IconComplete, IconDelete}