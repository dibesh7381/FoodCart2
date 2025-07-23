import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../features/CartSlice';
import '../styles/Cart.css';

const CartPanel = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="cart-panel">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="quantity">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
                <div className="cart-buttons">
                  <button className="buy">Buy</button>
                  <button className="delete" onClick={() => dispatch(removeFromCart(item.id))}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPanel;


