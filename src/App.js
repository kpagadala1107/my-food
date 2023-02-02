import {useState} from 'react';
import foodHome from './images/food-home.jpeg'
import FoodStores from './components/FoodStores'
import Cart from './components/Cart'
import './App.css';

const menuItems = [
  {id: Math.random().toString,imageName: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60', itemName: 'Salad', price: '$8.99', quantity:0},
  {id: Math.random().toString,imageName:'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60', itemName: 'Burger',  price: '$11.99', quantity:0},
  {id: Math.random().toString,imageName:'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60', itemName: 'Chicken Wings', price: '$10.99', quantity:0},
  {id: Math.random().toString,imageName: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60', itemName: 'Steak', price: '$18.99', quantity:0},
  {id: Math.random().toString,imageName:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60', itemName: 'Gourmet Salad',  price: '$11.99', quantity:0}

]

const cartItems = [ ];

function App() {

  const [menu,] = useState(menuItems);

  const [cart, setCart] = useState(cartItems);

  const addCartHandler = (item) => {
    // console.log(item);

    setCart(prevCart => {
      return [item, ...prevCart]
    });

    // console.log('cart');
    // console.log(cart.length);
  }

  const showCart = () => {
    console.log('show cart');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='my-title'>Aakalesthondi </h1>
        <img src={foodHome} className="App-home" alt="food" />
      </header>
      <div className='store-header'>
        <h2 className='menu-header'>Cub Menu</h2>
        <p onClick={showCart}> Cart({cart.length})</p>
        <Cart cartItems={cart}/>
      </div>
      
      <FoodStores onCartAdd={addCartHandler} menu={menu} />
    </div>
  );
}

export default App;
