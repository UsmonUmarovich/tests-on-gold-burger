import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [postProduct, setPostProduct] = useState({
    img: "",
    title: "",
    desc: "",
    price: "",
  });

  const navigate = useNavigate()

  const handleInput = (event) => {
    setPostProduct({ ...postProduct, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    console.log(postProduct);
    axios
    .post("http://localhost:8080/products/add", { ...postProduct })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
    event.preventDefault();
    navigate("/")
    window.location.reload()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          name="img"
          placeholder="img"
        />
        <input
          type="text"
          onChange={handleInput}
          name="title"
          placeholder="title"
        />
        <input
          type="text"
          onChange={handleInput}
          name="desc"
          placeholder="desc"
        />
        <input
          type="text"
          onChange={handleInput}
          name="price"
          placeholder="price"
        />
        <button>post</button>
      </form>
    </div>
  );
}

export default CreateProduct;
