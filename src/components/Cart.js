
import CartItem from './CartItem.js'
import './Cart.css'

const Cart = props => {

    // const [total, setTotal] = useState(0);

    // useEffect(() => {
    //     setTotal(props.cartItems.map(item=> total+item.price))
    //     console.log('total')
    //     console.log(total)

    // },[]);

    const totalhandler = total => {
        console.log('total');
        console.log(total);

    }
    
    return (
        <div className='cart'> 
            {props.cartItems.map(item => {return <CartItem onTotalUpdate={totalhandler} cartItem={item} />})}
        </div>
       
    )

}

export default Cart;