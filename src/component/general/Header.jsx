import React from "react";
import UserMenu from "./UserMenu";
import { BiCart } from "react-icons/bi";
import ProductCart from "../product/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAccountCircle } from "react-icons/md";
import { handleOpenCart, handleOpenMenu } from "../../redux/action/counterAction";

const Header = () => {
  const dispatch = useDispatch();
  const { openCart, openMenu } = useSelector((state) => state.counter);

  return (
    <div className="bg-primary">
      <div className="container  py-5 flex items-center justify-between">
        <div>
          <h4>SIMPLE-COMMERCE</h4>
        </div>
        <div className="relative flex items-center justify-center gap-5">
          {openMenu && <UserMenu />}
          {openCart && <ProductCart />}
          <button className="relative" onClick={() => dispatch(handleOpenCart(!openCart))}>
            <BiCart size={25} />
            <span className="absolute top-[-10px] right-[-5px] h-5 w-5 rounded-full  text-[8px] text-white bg-red-500">
              <b>{totalAmount}</b>
            </span>
          </button>
          <button onClick={() => dispatch(handleOpenMenu(!openMenu))}>
            <MdOutlineAccountCircle size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
