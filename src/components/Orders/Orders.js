import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); //* returns {products: products, initialCart :initialCart}
  // console.log(products);

  const [cart, setCart] = useState(initialCart); //* initialCart returns all the ordered products with detailed quantity

  const handleRemoveItem = (id) => {
    // console.log(id);
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);

    removeFromDb(id); // * remove from localDb
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div>
      {/* <h1>This is Orders {products.length}</h1>
      <p>InitialCart : { initialCart.length}</p> */}
      <div className="shop-container">
        <div className="orders-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          ))}

          {
            cart.length === 0 && <h2>No Items Ordered. Please <Link to="/">Shop More</Link></h2>
          }
        </div>
        <div className="cart-container">
          <Cart cart={cart} clearCart={clearCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
