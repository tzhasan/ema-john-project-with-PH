import React from 'react';
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewItem = ({ product, handleRemovedCart }) => {
  const { name, price, quantity, img,id } = product;
  console.log(name, price, quantity, img);
  return (
    <div className="w-[570px] rounded-md border-2 border-gray-900 ">
      <div className="flex justify-between">
        {/*  */}
        <div className="flex gap-2">
          <img className="w-[15%] rounded-md" src={img} alt="" />
          <div>
            <p> Name: {name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
        {/*  */}
        <button onClick={() => handleRemovedCart(id)} className="mr-4">
          <TrashIcon className="h-8 w-8 text-blue-800" />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;