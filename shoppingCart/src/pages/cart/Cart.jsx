import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
        {totalAmount > 0 ? (
       <div className="checkout">
     <p className="subtotalp">subtotal:${totalAmount} </p>
     <button  onClick={() => navigate("/")}> Continue Shopping </button>
     <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          > Checkout
            {/* {" "}
            Checkout{" "} */}
          </button>
       </div>
       ): (<h1 className="cartempty"> Your Cart is Empty</h1>)}
    </div>
  );
};