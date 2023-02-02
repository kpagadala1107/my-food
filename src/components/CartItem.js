import { useState } from "react";
import './CartItem.css'


const CartItem = props => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);

    const incHandler = () => {
        setQuantity(prevCnt => {
            return prevCnt+1
        })
    }


    const decHandler = () => {
        setQuantity(prevCnt => {
            if(prevCnt===0){
                return 0
            }
            return prevCnt-1
        })
    }

    const computeTotal = (event) => {
        setTotal(prevTotal => {
            return prevTotal + event.target.value;
        })
        
        props.onTotalUpdate(total);
    }

    return (
        <div className="cart-item">
            <p className="cart-item-name">{props.cartItem.itemName}</p>
            <p className='cart-item-price' >{props.cartItem.price}</p>
            <button className='minus-button' onClick={decHandler}> - </button>
            <p className="quantity">{quantity}</p>
            <button className="plus-button" onClick={incHandler}> + </button>
            <p onChange={computeTotal}>{+props.cartItem.price.substr(1) * quantity}</p>
        </div>
    )
}

export default CartItem;