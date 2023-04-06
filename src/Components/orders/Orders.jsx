import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../review item/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const SavedCart = useLoaderData()
  const [cart, setCart] = useState(SavedCart) 
  
  const handleRemovedCart = (id) => {
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining)
    removeFromDb(id)
  }

  return (
    <div className="shop-container ">
      <div className="m-20 flex flex-col gap-3">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemovedCart={handleRemovedCart}
          ></ReviewItem>
        ))}
      </div>

      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;