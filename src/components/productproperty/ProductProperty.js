import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../proudctCard/ProductCard";
import { useSelector } from "react-redux";

export default function ProductProperty() {
  const { id } = useParams();
  const d = useSelector((state) => state.data.data);

  const data = d.filter((item) => {
    if (item.id === Number(id)) {
      return item;
    }
  });
  return <ProductCard item={data[0]} />;
}
