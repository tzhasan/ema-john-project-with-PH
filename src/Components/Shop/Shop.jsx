import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {

  const [products, setProducts] = useState([])
  const [cart,setCart]= useState([])
  useEffect(()=> {
    fetch('products.json')
    .then (res=>res.json())
    .then (data=>setProducts(data))
  }, [])
  
  const handleCart = (props) => {
    const newCart = [...cart,props]
    setCart(newCart)
  }

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {
          products.map(product => <Product
            handleCart={handleCart}
            key={product.id}
            product={product}></Product>)
        }
      </div>
      
      <div className='cart-container'>
        <h2 className='title'>Order Summary</h2>
        <h3>Added to the cart: { cart.length} Items</h3>
      </div>
    </div>
  );
};

export default Shop;