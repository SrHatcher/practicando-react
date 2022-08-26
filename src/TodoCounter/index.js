import React from 'react';
import './TodoCounter.css';

function TodoCounter({children}){
    return (
        <section className='TodoCounter'>
            {children}
        </section>
    )
}

export {TodoCounter};