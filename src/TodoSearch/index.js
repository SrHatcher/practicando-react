import React from 'react'
import './TodoSearch.css'

function TodoSearch(searchValue, setSearchValue){
    const onSearchValue = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

    return(
        <input className='TodoSearch'  placeholder='Cebolla' value={searchValue} onChange={onSearchValue}/>
    )
}

export {TodoSearch};