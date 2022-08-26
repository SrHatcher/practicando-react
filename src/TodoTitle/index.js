import React from "react";
import "./title.css"

function TodoTitle({children}){
    return(
        <header className="header">
            {children}
        </header>
    )
}

export {TodoTitle}