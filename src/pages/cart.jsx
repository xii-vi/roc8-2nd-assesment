import { CartCard } from "../components/cartCard";
import { useCart } from "../context/cartContext"

export const Cart =()=>{
    const{cartState:{cartItem}} = useCart();
    const calculateTotalPrice = (cartItem) => {
        return  cartItem.reduce((totalPrice, product) => {
            return {
                sum: (product.price) * (product.quantity) + (totalPrice.sum)
            }
        }, { sum: 0 })
    }
    const totalPrice = calculateTotalPrice(cartItem);
    const price = totalPrice.sum;
    const finalPrice = price.toFixed(2);
    return(
        <>
        <h3 className="text-center">Cart ({cartItem.length})</h3>
        <div className="cart-page-layout">
            <div>
            {
                cartItem.map(item=><CartCard cartProduct={item} key={item.id} />)
            }
            </div>
            <div>
            <div className="m-4">
            <div className="bg-color">
                <div className="flex space-bw">
                    <p className="p-3">Subtotal ({cartItem.length} items)</p>
                    <p className="p-3">${price}</p>
                </div>
                <div className="flex space-bw">
                    <p className="p-3">Delivery Charges</p>
                    <p className="p-3">Free</p>
                </div>
                <hr />
                <div className="flex space-bw">
                    <p className="h4 p-3 text-bold">Total</p>
                    <p className="h4 p-3 text-bold">${finalPrice}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}