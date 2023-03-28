import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
  useEffect(() => {
  const savedCart = []

    const storedCart = getShoppingCart()
    // get id
    for (const id in storedCart) {
      // step 2
      const addedProduct = products.find(product=>product.id===id)
      // step3
      if (addedProduct) {
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
    
  },[products])
  
  const handleCart = (product) => {
    let newCart = []
    const exists = cart.find(pd => pd.id === product.id)
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    }
    else {
      exists.quantity = exists.quantity + 1
      const remaining = cart.filter(pd=> pd.id !== product.id)
      newCart= [...remaining, exists]
    }
    setCart(newCart)
    addToDb(product.id)
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