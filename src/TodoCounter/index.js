import React from 'react';
import './TodoCounter.css';

function TodoCounter({children, loading}){
    return (
        <section className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
            {children}
        </section>
    )
}

export {TodoCounter};