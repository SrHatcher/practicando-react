import React from "react";

function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(()=>{
            const onChange=(change)=>{
                if(change.key==="TODOS_V1"){
                    console.log("Hubo cambios en TODO_v1")
                    setStorageChange(true)
                }
            }

            window.addEventListener("storage", onChange)
            
            return () => {
                window.removeEventListener("storage",onchange)
            }
        },[])

        return (
            <WrappedComponent 
                {... props}
                show={storageChange}
                toggleShow={setStorageChange}
            />
        )
    }
}

export { withStorageListener }