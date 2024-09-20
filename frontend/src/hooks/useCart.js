import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCart = () =>{
    const Context = useContext(CartContext)

    if (Context === undefined){
        throw new Error("UseCart must be used within a cartProvider")
    }
    return Context
}

