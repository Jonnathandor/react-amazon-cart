import React from 'react';
import './CartItems.css';
import CartItem from './CartItem';


export default function CartItems({ items }) {
  return (
      <div className="cart-items">
        <h1>Shopping Cart</h1>
        <hr></hr>
        <div className="cart-items-list">
          {
            items.map((item, index) => {
              return <CartItem
              key={index}
              title={item.title}
              stock={item.stock}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              />
            })
          }
        </div>
      </div>
  );
}
