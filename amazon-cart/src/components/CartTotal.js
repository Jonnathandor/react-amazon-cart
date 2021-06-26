import React from 'react';
import './CartTotal.css';

export default function CartTotal() {
    return (
        <div className="cart-total">
            <h3>Subtotal <span className="cart-total-price">$2000</span></h3>
            <button>
                Proceed to Checkout
            </button>
        </div>
    );
}
