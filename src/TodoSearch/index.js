import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, loading}){
    const onSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    return(
        <>
            <div className='contenedor-search'>
                <div className='contorno-TodoSearch'></div>
                    <input className='TodoSearch'  placeholder='. . .' value={searchValue} onChange={onSearchValue} disabled={loading}/>
                <div className='contorno-TodoSearch2'></div>
                <div className='barras'></div>
                <div className='barras2'></div>
                <p className='buscar'>Buscar</p>
                <p className='buscar'>バスカー</p> 
            </div>
        </>
    )
}

export {TodoSearch};