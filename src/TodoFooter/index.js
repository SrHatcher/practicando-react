import React from "react";
import "./footer.css"
import {TodoBackground2} from "../TodoBackground"

function TodoFooter({children}){
    return(
        <footer>
            <div className="contorno-footer"></div>
            {children}
            <TodoBackground2/>
        </footer>
    )
}

export {TodoFooter}