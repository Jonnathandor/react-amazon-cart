import React from 'react';
import './CartTotal.css';
import NumberFormat from 'react-number-format';

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
            <h3>Subtotal({items.length} items): 
                <span className="cart-total-price">
                    <NumberFormat value={getTotalPrice()} 
                    displayType={'text'} 
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}></NumberFormat>
                </span>
            </h3>
            <button>
                Proceed to Checkout
            </button>
        </div>
    );
}
