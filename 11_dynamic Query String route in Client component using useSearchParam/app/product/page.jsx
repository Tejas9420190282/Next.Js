// ProductList.jsx

"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const ProductList = () => {
  const searchParams = useSearchParams();
 
  const category = searchParams.get('category');
  const pages = searchParams.get('page');
  const brand = searchParams.get('brand');

    console.log(`Client category :${category}`);
    console.log(`Client page :${pages}`);
    console.log(`Client brand :${brand}`);

  return (
    <div className="bg-blue-300 text-black mt-10 flex flex-col gap-2 text-xl pl-2">
      <p>Client category : {category}</p>
      <p>Client pages : {pages}</p>
      <p>Client brand : {brand}</p>
    </div>
  );
};
export default ProductList;
