import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

//local imports
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        console.log("Response", res);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters, setFilteredProducts]);

  useEffect(() => {
    console.log("filter products", filteredProducts);
    if (sort === "newest") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => {
          return a.price - b.price;
        })
      );
    } else {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  console.log("Fitler products", filteredProducts);

  return (
    <Container>
      {cat
        ? filteredProducts?.map(product => (
            <Product product={product} key={product._id} />
          ))
        : products
            ?.slice(0, 8)
            .map(product => <Product product={product} key={product._id} />)}
    </Container>
  );
};

export default Products;
