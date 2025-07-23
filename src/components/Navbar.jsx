import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartPanel from './CartPanel';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
 const distinctItemsCount = cartItems.length; // ✅ only count unique items


  // Total quantity in cart (sum of all item quantities)

  return (
    <>
      <div className="navbar">
        <h1>FOOD STORE</h1>
        <div className="cart-container" onClick={() => setShowCart(!showCart)}>
          <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="Cart" className="cart-icon" />
          {distinctItemsCount > 0 && <span className="cart-badge">{distinctItemsCount}</span>}
        </div>
      </div>
      {showCart && <CartPanel />}
    </>
  );
};

export default Navbar;

