import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";
import { IsItemInCart } from "../helper/isItemInCart";

export const ProductCard =({productData:data})=>{
    const {cartDispatch,cartState:{cartItem}} = useCart();
    const {imageSrc,imageAlt,name,brand,price,id} = data;
    const addToCartHandler=()=>{
        cartDispatch({type:"ADD_TO_CART", payload:data})
    }
    return(
    <div class="card-wrapper">
        <div class="card-img">
            <img src={imageSrc} alt={imageAlt} />
        <div class="p-3">
        <small>{brand}</small>
        <p class="bold-text">{name}</p>
        <small>$ {price}</small>
        </div>
        {IsItemInCart(cartItem,id)
        ?<Link to="/cart"><button className="btn btn-primary m-2">Go to Cart</button></Link>:<button className="btn btn-primary m-2" onClick={addToCartHandler}>Add to Cart</button>}
        
</div>
</div>
    )
}