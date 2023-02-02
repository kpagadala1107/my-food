import './Foodstore.css'

const FoodStore = props => {

    const addItemHandler = () => {
        console.log(props.storeItem)
       props.onItemSelect(props.storeItem)
    }
    

    return (
        <div className="item-card" >
            <img className="item-img" src={props.storeItem.imageName}  alt="McDonald" />
            <div className='item-desc'>
                <p className='item-name'>{props.storeItem.itemName}</p>
                <p className='item-price'><strong>{props.storeItem.price}</strong></p>
                <button onClick={addItemHandler} type='text'><strong>Add to Cart</strong></button>
            </div>
        </div>
    )
    
}

export default FoodStore;