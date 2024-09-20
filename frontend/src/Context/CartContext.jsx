import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const addToCart = product => {
        const productInCart = cart.findIndex(item => item._id === product._id)

        if (productInCart >= 0 ){
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
