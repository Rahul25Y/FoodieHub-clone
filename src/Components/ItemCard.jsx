import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { removeFromCart, incrementQty, decrementQty } from "../redux/Slices/CardSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

function ItemCard({ id, name, price, img, qty }) {
  const dispatch = useDispatch();
  
  

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
      <MdDelete 
         onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name}Removed! `, {
            icon:<MdDeleteForever className=" text-red-500 text-2xl font-bold border border-red-400 rounded-xl "/>
          });
         
        }}
        className="absolute right-7 text-gray-500 cursor-pointer"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className=" text-gray-800 font-bold">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ {price}</span>
          <div className="flex justify-center items-center absolute right-7 gap-2">
            <AiOutlineMinus 
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus 
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
