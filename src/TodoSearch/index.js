import React from 'react'
import { TodoContext } from '../todoContext'
import './TodoSearch.css'

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    const onSearchValue = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

    return(
        <input className='TodoSearch'  placeholder='Cebolla' value={searchValue} onChange={onSearchValue}/>
    )
}

export {TodoSearch};