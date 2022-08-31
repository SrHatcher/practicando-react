import React from "react";

let parsedItem;
function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
    const [change, setChange] = React.useState(true)
  
    React.useEffect(()=>{
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          
          
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem=initialValue
          }else{
            parsedItem=JSON.parse(localStorageItem)
          }
  
          setItem(parsedItem)
          setLoading(false)
          setChange(true)
        } catch (error) {
          setError(error)
        }
      }, 2000);
    }, [change]);  
  
    const saveItem = (newItem)=>{
      try{
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
      }catch(error){
        setError(error)
      }
    }
  
    const sincronize = () => {
      setLoading(true);
      setChange(false)
      setItem([])
    }
  
    return {item, saveItem, loading, error, sincronize}
  }

  export { useLocalStorage }