import React from "react";
import "./change.css"
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow, sincronize}){
    if(show){
        return(
            <div className="change-alert">
                <p>Hubo cambios! </p>
                <button onClick={()=>{
                        sincronize()
                        toggleShow(false)
                    }}>Actualizar</button>
            </div>
        )
    }else{
        return null
    }
    
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }