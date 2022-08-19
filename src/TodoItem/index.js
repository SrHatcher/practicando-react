import React from "react";
import './TodoItem.css';
import {TodoIcon} from '../TodoIcon'

function TodoItem(props){
    const tipo= "check"
    return(
      <li className="TodoItem">
        <TodoIcon tipo="check" info={props.info} completed={props.completed}></TodoIcon>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.info}
        </p>
        <TodoIcon tipo="cerrar" info={props.info}></TodoIcon>
      </li>  
    )
}

export { TodoItem};