import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [postProduct, setPostProduct] = useState({
    img: "",
    title: "",
    desc: "",
    price: "",
  });

  const navigate = useNavigate()
  const {id} = useParams()
  
  const handleInput = (event) => {
    setPostProduct({ ...postProduct, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    console.log(postProduct);
    axios
    .put("http://localhost:8080/products/"+id, { ...postProduct })
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
        <button>update</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
