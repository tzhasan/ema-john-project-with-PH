import React from 'react';
import './Product.css'

const Product = (props) => {
  const handleCart = props.handleCart
  const {name,seller,price,img,ratings}= props.product
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p className='price'>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: { ratings}</p>
      </div>
      <button onClick={()=>handleCart(props.product)} className='btn-cart'>Add to Cart</button>
    </div>
  );
};

export default Product;