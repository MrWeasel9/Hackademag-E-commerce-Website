import React from "react";
import "./Product.css";

interface ProductsProps {
  result: React.ReactNode;
}

const Products: React.FC<ProductsProps> = ({ result }) => {
  return (
    <section className="card-container">{result}</section>
  );
};

export default Products;
