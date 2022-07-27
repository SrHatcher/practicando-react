import React from "react";
import './TodoItem.css';

function TodoItem(props){
  const onComplete = () => {
    alert('lo completaste bb: ' + props.info)
  }

  const onDelete = () => {
    alert('lo borraste bb: ' + props.info)
  }

    return(
        <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={onComplete}>
          √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.info}
        </p>
        <span className="Icon Icon-delete" onClick={onDelete}>
          X
        </span>
      </li>  
    )
}

export { TodoItem};