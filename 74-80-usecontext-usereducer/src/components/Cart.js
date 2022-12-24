import { useContext } from "react";
import { ShopContext } from "../context";
import Shop from "./Shop";

function Cart() {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const quantity = order.lenght;

  return (
    <div className='cart blue darken-4 white-text' onClick={handleBasketShow}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}

export default Cart;
