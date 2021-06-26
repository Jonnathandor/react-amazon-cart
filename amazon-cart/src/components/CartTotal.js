import React from 'react';
import './CartTotal.css';

export default function CartTotal({items}) {
    const getTotalPrice = () => {
        let total = 0;
        items.forEach(item => {
            total += item.price * item.quantity;
        });

        return total;
    }
    return (
        <div className="cart-total">
            <h3>Subtotal({items.length} items): <span className="cart-total-price">${getTotalPrice()}</span>
            </h3>
            <button>
                Proceed to Checkout
            </button>
        </div>
    );
}
