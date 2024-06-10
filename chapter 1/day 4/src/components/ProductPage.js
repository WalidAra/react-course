import React from "react";
import { Outlet, useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      ProductPage {productId} <Outlet />{" "}
    </div>
  );
};

export default ProductPage;
