import React, { useEffect, useState } from "react";
import getProducts from "../services/getProducts";
import ProductCard from "./ProductCard";
import "./productPage.css";
import SearchBar from "./Search";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.body.results);
    });
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase()
    const filteredProducts = products.filter(item => (  item.name.en.toLowerCase().includes(query)))
    setFilteredProducts(filteredProducts)
  }, [products, searchQuery])

  return (
    <>
      <SearchBar
        products={products}
        filteredProducts={products}
        setFilteredProducts={setFilteredProducts}
        setSearchQuery={setSearchQuery}
      />
      <div className="products-container">
        {filteredProducts.map((item, index) => {
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
