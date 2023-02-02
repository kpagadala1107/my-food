import FoodStore from './FoodStore.js';

const FoodStores = props => {

    const itemSelectHandler = (itemSelected) => {
        console.log(itemSelected);
        props.onCartAdd(itemSelected)
    }

    return (
        <div className='food-stores'>
           { props.menu.map(item => <FoodStore onItemSelect={itemSelectHandler} storeItem={item} /> ) }
        </div>
    )

}

export default FoodStores;