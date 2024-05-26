import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailMenu from "./DetailMenu";
import { clearCart } from "../utils/cartSlice";
import ReactCard from "./ReactCard";
import emptyCart from "../assets/emptyCart.png";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems, "cart items");
  const dispatch = useDispatch();
  const onClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-2xl text-center  font-bold">Cart</h1>
      <div className="flex justify-center">
        <button
          className="text-center p-2 m-2 bg-black text-white rounded-lg"
          onClick={onClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && <ReactCard imgSrc={emptyCart} />}
      <div className="m-4 p-4 flex justify-center">
        <div className="text-center w-6/12">
          <DetailMenu data={cartItems} cartItem={false} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
