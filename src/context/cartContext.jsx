import { createContext,useContext,useReducer } from "react";
import {CartReducer} from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider =({children})=>{
    const [cartState, cartDispatch] = useReducer(CartReducer, {
        cartItem:[]
    })
return(
<CartContext.Provider value={{cartState,cartDispatch}}> 
{children}
</CartContext.Provider>
)}

const useCart =()=>useContext(CartContext);

export {useCart,CartProvider};