import React from 'react';
import './CartItem.css'

export default function CartItem() {
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img alt="product" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvKlHOlYcOuachLvJEXeLSer4E5iBJx87dVcSjawLcbG3pVDV483nOG4Xog&usqp=CAc"></img>
            </div>
            <div className="cart-item-info">
                <div className="info-title">
                    <h2>Ipad Pro</h2>
                </div>
                <div className="info-stock">
                    In Stock
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                        <select>
                            <option value="1">Qty: 1</option>
                            <option value="1">Qty: 2</option>
                            <option value="1">Qty: 3</option>
                        </select>
                    </div>
                    <div className="item-actions-divider">|</div>
                    <div className="item-delete">
                        Delete
                    </div>
                </div>
            </div>
            <div className="cart-item-price">
                $769.00
            </div>
        </div>
    );
}
