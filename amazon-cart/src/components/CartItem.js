import React from 'react';
import './CartItem.css'

export default function CartItem({ title, stock, image, price, quantity }) {
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
                        <select value={quantity}>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                        </select>
                    </div>
                    <div className="item-actions-divider">|</div>
                    <div className="item-delete">
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
