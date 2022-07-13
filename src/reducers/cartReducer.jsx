export const CartReducer =(state,{type,payload})=>{
switch(type){
    case "ADD_TO_CART":
            return {
                ...state,
                cartItem: [...state.cartItem, {
                    ...payload,
                    quantity: 1
                }]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItem: state.cartItem.filter((item) => item.id !== payload.id)
            }
            case "INCREASE_CART_ITEM":
            return {
                ...state,
                cartItem: state.cartItem.map((item) => item.id === payload.id ? {
                ...item,
                quantity: item.quantity + 1
            } : item)
        }
        case "DECREASE_CART_ITEM":
            return {
                ...state,
                cartItem: state.cartItem.map((item) => item.id === payload.id ? {
                    ...item,
                    quantity: item.quantity - 1
                } : item)
            }
        default:
            return state;
}
}