import React from "react";
import "./icon.css"



function TodoIcon({tipo, info, completed, completeTodo, deleteTodo}){
    let clase;
    if(tipo==="check"){
        clase="check"
    }else{
        clase="cerrar"
    }

    return(
         <>
            <span className={`${clase} ${completed && 'check-completed'}`} onClick={()=> {
                    if(tipo==="check"){
                        completeTodo(info)
                    }else{
                        deleteTodo(info)
                    }
                }}></span>
         </>
    )
}

export {TodoIcon}