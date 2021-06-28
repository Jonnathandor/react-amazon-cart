import React from 'react';
import './CartItems.css';
import CartItem from './CartItem';


export default function CartItems({ items, setCartItems }) {

  const changeItemQuantity = (e, index) => {
    const newItems = [...items]
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  }

  const deleteItem = (indexToDelete) => {
    const filterItems = items.filter((value, index) => {
      return index !== indexToDelete
    });

    setCartItems(filterItems);
  }

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
              changeItemQuantity={changeItemQuantity}
              index={index}
              deleteItem={deleteItem}
              />
            })
          }
        </div>
      </div>
  );
}
