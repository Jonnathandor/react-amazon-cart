import React from 'react';
import './CartItem.css'

export default function CartItem({ title, stock, image, price, quantity, changeItemQuantity, index, deleteItem }) {
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img alt="product" src={process.env.PUBLIC_URL + './items/' + image}></img>
            </div>
            <div className="cart-item-info">
                <div className="info-title">
                    <h2>{title}</h2>
                </div>
                <div className="info-stock">
                    {stock}
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                        <select
                        value={quantity}
                        onChange={(e)=> {changeItemQuantity(e, index)}}>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                            <option value="6">Qty: 6</option>
                        </select>
                    </div>
                    <div className="item-actions-divider">|</div>
                    <div className="item-delete" onClick={deleteItem.bind(this, index)}>
                        Delete
                    </div>
                </div>
            </div>
            <div className="cart-item-price">
                ${price}
            </div>
        </div>
    );
}
