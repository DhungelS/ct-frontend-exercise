import React, { useEffect, useState } from "react";
import getProducts from "../services/getProducts";
import ProductCard from "./ProductCard";
import './productPage.css'

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      console.log("res", res);
      setProducts(res.body.results);
    });
  }, []);

  console.log("ab", products);

  return (
    <>
      <h1>Products</h1>
      <div className='products-container'>
        {products.length > 0 &&
          products.map((item, index) => {
            return (
              <ProductCard
                key={index}
                name={item.name.en}
                img={
                  item.masterVariant.images[0].url
                    ? item.masterVariant.images[0].url
                    : null
                }
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductsPage;
