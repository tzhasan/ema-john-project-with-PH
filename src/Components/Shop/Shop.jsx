import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
      
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;