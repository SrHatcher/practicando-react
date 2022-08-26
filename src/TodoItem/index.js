import React from "react";
import './TodoItem.css';
import {IconComplete, IconDelete} from '../TodoIcon'

function TodoItem(props){
    return(
      <li> 
        <div className="corte-figura"></div>
        <div className="TodoItem">
          <IconComplete tipo="check" info={props.info} completed={props.completed} completeTodo={props.completeTodo} deleteTodo={props.deleteTodo}></IconComplete>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.info}
          </p>
          <IconDelete />
        </div>  
        <div className="corte-figura2"></div>
      </li>
    )
}

export { TodoItem};