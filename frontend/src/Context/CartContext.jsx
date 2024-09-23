import { createContext, useState } from 'react'
import Cookies from "js-cookie"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const addToCart = product => {
        
        setCart(prevState => ([
            ...prevState,
            {
                ...product
            }
        ]))
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item._id !== product._id))
    }
    const clearCart = () =>{
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
