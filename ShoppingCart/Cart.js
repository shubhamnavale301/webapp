import React from 'react';
import Item from './Item';
import data from '../data/cart.json';

class Cart extends React.Component {
    render() {
        const cartItems = data;
        return (
            <div>
                <h2>carbuzz Wishlist</h2>
                <h3>My Cars Wishlist</h3>
                {
                    cartItems.map(item => (
                        <Item title={item.title}
                            imageurl={item.imageurl}
                            unitprice={item.unitprice}
                            quantity={item.quantity} />
                    ))
                }
            </div>
        );
    }

}
export default Cart;