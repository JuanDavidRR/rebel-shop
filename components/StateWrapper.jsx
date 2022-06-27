import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext({
    isOpen: false,
    items: [],
    openCart: () => {},
    closeCart: () => {},
    addItemToCart: (item) => {},
    getQty: (item) => {},
    getAddQty: (item) => {},
    getNumberOfItems: () => {}
})

const StateWrapper = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [items, setItems] = useState([])

    const handleOpenCart = () =>{
        setIsOpen(true)
    }

    const handleCloseCart = () =>{
        setIsOpen(false)
    }

    const handleAddItemToCart = (item) =>{
        const temp = [...items]
        const found = temp.find(product => product.id === item.id)
        if (found) {
            found.qty++;
        }else{
            item.qty = 1
            temp.push(item)
        }
        setItems([...temp])
        

    }

    const handleNumberOfItems = () =>{
        const total = items.reduce((acc, item) => acc + item.qty,  0);
        return total
    }

    const handleQty = (item) =>{
        const temp = [...items]
        const index = temp.indexOf();
        const dismiss = temp.find(product => product.id === item.id)
       if (dismiss) {
        dismiss.qty--;
        console.log('hola');
        if(dismiss.qty <= 0){
            temp.splice(index, item)
        } 
       }
       setItems([...temp])
       
    }

    const handleAddQty = (item) =>{
        const temp = [...items]
        const dismiss = temp.find(product => product.id === item.id)
       if (dismiss) {
        dismiss.qty++;
       }
       setItems([...temp])
    }

    

  return (
    <AppContext.Provider value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getQty: handleQty,
        getAddQty: handleAddQty,
        getNumberOfItems: handleNumberOfItems
    }}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
    return useContext(AppContext)
}

export default StateWrapper