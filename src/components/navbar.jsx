import { Link } from "react-router-dom"
import { useCart } from "../context/cartContext"

export const Navbar =()=>{
    const{cartState:{cartItem}}=useCart();
    return(
        <div class="body-content">
        <nav class="navbar flex">
            <p class="text-lg">Flipkart</p>
                <div class="nav-pills-left">
                <Link to="/cart">
                <span class="icons-wrapper">
                <span><i class="fa fa-shopping-cart mr-2"></i></span>
                <span class="badge icons">{cartItem.length}</span>
                </span>
                </Link>
                </div>
        </nav>
        </div>
    )
}