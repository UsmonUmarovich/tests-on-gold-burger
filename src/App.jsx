import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductItem from "./ProductItem";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Products from "./Products.jsx";
import CreateProduct from "./CreateProduct.jsx";
import UpdateProduct from "./UpdateProduct.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
