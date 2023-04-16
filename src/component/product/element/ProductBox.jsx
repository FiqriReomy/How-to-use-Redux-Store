import React from "react";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../../utils/formatPrice";
import { addCart } from "../../../redux/action/cartAction";

const ProductBox = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-3 h-[330px] border rounded-md shadow-xl bg-white">
      <div className="h-[200px] overflow-hidden border">
        <img className=" w-full h-full object-cover" src={data.thumbnail} alt="product_image" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="mb-2 cursor-pointer">
          <h5 title={data.title}>{data.title.length > 20 ? data.title.substring(0, 20) + "..." : data.title}</h5>
          <span className="font-bold text-md">{formatPrice(data.price * 14500)}</span>
        </div>
        <div className="flex">
          <button onClick={() => dispatch(addCart({ data, amount: 1 }))} className="w-full submitBtn">
            ADD TO CART +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
