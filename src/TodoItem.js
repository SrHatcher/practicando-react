import React from "react";

function TodoItem(props){
    let valor;

    if(props.info.completed){
        valor= "completado";
    }else {
        valor= "no completado";
    }

    return(
        <li>
            <h3>{props.info.text}</h3>
            <h6>{valor}</h6>
        </li>
    )
}

export { TodoItem};