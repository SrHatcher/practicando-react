import React from "react";
import './TodoItem.css';
import {IconComplete, IconDelete} from '../TodoIcon'

function TodoItem(props){
    return(
      <li> 
        <div className={`corte-figura ${ props.completed && `completed`}`}></div>
        <div className={`TodoItem ${ props.completed && `completed  corte-figura2-completed`}`}>
          <IconComplete tipo="check" info={props.info} completed={props.completed} completeTodo={props.completeTodo} deleteTodo={props.deleteTodo} />
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.info}
          </p>
          <IconDelete info={props.info} deleteTodo={props.deleteTodo}/>
        </div>  
        <div className={`corte-figura2 ${ props.completed && `completed`}`}></div>
      </li>
    )
}

export { TodoItem};