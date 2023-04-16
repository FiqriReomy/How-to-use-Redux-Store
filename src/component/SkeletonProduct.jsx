import React from "react";

const SkeletonProduct = () => {
  return (
    <div className="p-3 border rounded-md shadow-xl bg-white animate-pulse">
      <div className="h-[200px] bg-gray-200 animate-pulse"></div>
      <div className="mt-2 bg-gray-200 w-2/3 h-4 animate-pulse"></div>
      <div className="mt-2 bg-gray-200 w-1/3 h-4 animate-pulse"></div>
    </div>
  );
};

export default SkeletonProduct;
