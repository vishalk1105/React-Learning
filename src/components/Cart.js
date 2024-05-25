import React from "react";
import { useSelector } from "react-redux";
import DetailMenu from "./DetailMenu";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems, "cart items");
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="text-center w-6/12">
        <DetailMenu data={cartItems} cartItem={false} />
      </div>
    </div>
  );
};

export default Cart;
