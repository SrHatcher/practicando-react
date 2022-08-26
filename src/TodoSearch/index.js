import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){
    const onSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    return(
        <>
            <input className='TodoSearch'  placeholder='. . .' value={searchValue} onChange={onSearchValue}/>
            <p className='buscar'>Buscar</p>
            <p className='buscar'>バスカー</p>
        </>
    )
}

export {TodoSearch};