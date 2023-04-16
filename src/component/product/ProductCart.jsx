import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

const ProductCart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="absolute top-10 w-[375px]  bg-white ">
      {cart.length === 0 ? (
        <div className="h-[100px] p-5 flex items-center justify-center">
          <p>There is no product in cart</p>
        </div>
      ) : (
        <div className="max-h-[300px] overflow-y-scroll p-4">
          {cart.map((data, index) => (
            <div key={index} className="mb-2 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="relative w-[50px] h-[50px] overflow-hidden border">
                  <img className="absolute w-full object-contain" src={data.data.thumbnail} alt="cart_product" />
                </div>
                <div>
                  <p>
                    <b>{data.data.title.length > 10 ? data.data.title.substring(0, 10) + "..." : data.data.title}</b>
                  </p>
                  <p className="text-[12px]">{data.amount} Barang</p>
                </div>
              </div>
              <div>
                <b>{formatPrice(data.data.price * 14500 * data.amount)}</b>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="p-4">
        <button className="submitBtn w-full">LIHAT KERANJAANG</button>
      </div>
    </div>
  );
};

export default ProductCart;
