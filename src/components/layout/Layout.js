import React from "react";
import Header from "../header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import ProductCard from "../proudctCard/ProductCard";
import ProductProperty from "../productproperty/ProductProperty";
export default function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main ProductCard={ProductCard} />} />
        <Route path="/property" element={<Main ProductCard={ProductCard} />} />
        <Route path="/property/:id" element={<ProductProperty />} />
      </Routes>
    </div>
  );
}
