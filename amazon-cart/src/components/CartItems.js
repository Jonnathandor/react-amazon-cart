import React from 'react';
import './CartItems.css';
import CartItem from './CartItem';


export default function CartItems() {
    return (
        <div className="cart-items">
          <h1>Shopping Cart</h1>
          <hr></hr>
          <div className="cart-items-list">
            <CartItem/>
          </div>
        </div>
    );
}
