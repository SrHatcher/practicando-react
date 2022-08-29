import React from "react";
import './TodoList.css'

function TodoList(props){
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {console.log(props.searchedTodos.length)}
            {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

            <ul>
                {props.searchedTodos.map(props.render)}
            </ul>
            {props.createButton()}
        </section>
    )
}

export {TodoList}