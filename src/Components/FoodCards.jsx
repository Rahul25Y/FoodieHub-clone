import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CardSlice";
function FoodCards({id,name,img,rating,desc,price,handleToast}) {
    const dispatch=useDispatch();
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg gap-1">
      <img
        src={img}
        about="food-img"
        className="w-auto h-[133px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex flex-col justify-between mt-3">
        <div className="flex justify-between">
          <h2>{name}</h2>
          <span className="text-green-500">₹{price}</span>
        </div>
        <p className="text-sm font-normal mt-2">
          {desc.slice(0,50)}...
        </p>
        {/* items-center mt-3 */}
        <div className="flex justify-between items-center mt-3 ">
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500" />
            <span className="ml-1">{rating}</span>
          </div>
          <button onClick={()=>{
            dispatch(addToCart({id,name,price,img,rating,qty:1}
            ));
            handleToast(name)
          }} className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCards;
