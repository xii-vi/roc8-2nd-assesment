import { useCart } from "../context/cartContext";

export const CartCard =({cartProduct:data})=>{
    const{cartDispatch} = useCart();
    const increaseCartHandler = () => {
        cartDispatch({ type: "INCREASE_CART_ITEM", payload: data });
    };
    
    const decreaseCartHandler = () => {
        cartDispatch({ type: "DECREASE_CART_ITEM", payload: data });
    };

    const removeFromCartHandler = () => {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: data });
    }
return(
<div className="flex m-4">
<img className="img-square"
    src={data.imageSrc}
    alt={data.imageAlt} />
<div className="mx-5 pt-5 pb-2">
    <small>{data.brand}</small>
    <p className="py-2">{data.name}</p>
    <small>$ {data.price}</small>
    <div className="my-4">
    {data.quantity === 1 ? (<button onClick={decreaseCartHandler} disabled><i className="fa fa-minus p-1"></i></button>):(<button onClick={decreaseCartHandler}disabled={false}><i className="fa fa-minus p-1"></i></button> ) }
        <span className="text-bold mx-2">{data.quantity}</span>
        <button onClick={increaseCartHandler}><i className="fa fa-plus p-1"></i></button>
    </div>
    <button className="btn btn-cart btn-outline-primary mt-2 mr-2" onClick={removeFromCartHandler}>
      <i className="fas fa-trash mr-2"></i>
        Remove from Cart </button>
</div>
</div>

)
}