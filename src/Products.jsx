import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { productsApi } from "./service/api.service";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const productsApi = async () => {
    const response = await axios.get("http://localhost:8080/products");
    // console.log(response.data);
    setProducts(response.data);
  };

  const handleDelete = async (id) => {
    try{
      await axios.delete("http://localhost:8080/products/"+id)
      window.location.reload()
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    productsApi();
  }, []);

  return (
    <div>
      <section className="products">
        <div className="container">
          <h1 className="products-title">Burger</h1>
          <div className="products-content">
            {products.map((item, index) => {
              return (
                <div key={index} style={{ border: "3px solid black" }}>
                  <h1>{item.img}</h1>
                  <h2>{item.title}</h2>
                  <h3>{item.desc}</h3>
                  <h4>{item.price}</h4>
                  <Link to={`/update/${item._id}`}>update product</Link>
                  <button onClick={e => handleDelete(item._id)}>Delete product</button>
                </div>
              );
            })}
          </div>
          <Link to={"/add"}>create product</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
