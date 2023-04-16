import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/productAction";
import SkeletonProduct from "../SkeletonProduct";
import ProductBox from "./element/ProductBox";

const ListProduct = () => {
  const dispatch = useDispatch();
  const { products, total, loading } = useSelector((state) => state.products);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, [limit]);

  const loadMoreData = () => {
    setLimit(limit + 4);
  };

  return (
    <div className="container">
      <h3>LIST OF PRODUCT</h3>
      <div className="flex flex-wrap">
        {products.map((data, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
            <ProductBox data={data} />
          </div>
        ))}
        {loading &&
          [...Array(4)].map((_, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
              <SkeletonProduct />
            </div>
          ))}
      </div>
      {total === limit ? (
        ""
      ) : (
        <div className="flex justify-center">
          <button onClick={loadMoreData} className="submitBtn w-full">
            {loading ? "is loading ...." : "LOAD MORE PRODUCTS"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
