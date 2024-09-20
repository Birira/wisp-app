import React from 'react'
import { useCart } from '../Hooks/useCart'
import "../css/Foo.css"
const Foo = () => {

    const {cart} = useCart()
  return (
    <footer className='footer'>
        {
            JSON.stringify(cart, null, 2)
        }
    </footer>
  )
}

export default Foo
