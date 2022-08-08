import React from 'react';
import './TodoCounter.css';

function TodoCounter({todos, completed}){
    return (
        <h2 className='TodoCounter'>Has completado {completed} de {todos} TODOs</h2>
    )
}

export {TodoCounter};