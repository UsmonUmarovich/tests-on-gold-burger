import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductItem from "./ProductItem";
function App() {
  const [products, setProducts] = useState([]);
  const [postProduct, setPostProduct] = useState({
    img: "",
    title: "",
    desc: "",
    price: "",
  });
  console.log(products);
  useEffect(() => {
    productsApi();
  }, []);

  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const productsApi = async () => {
    const response = await api.get("/products");
    // console.log(response);
    // const jsonData = await response.json()
    // console.log(jsonData);
    setProducts(response.data);
  };

  const handleInput = (event) => {
    setPostProduct({ ...postProduct, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(postProduct);
    api
      .post("/products", { ...postProduct })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleInput} name="img"/>
        <input type="text" onChange={handleInput} name="title"/>
        <input type="text" onChange={handleInput} name="desc"/>
        <input type="text" onChange={handleInput} name="price"/>
        <button>post</button>
      </form>
      <section className="products">
        <div className="container">
          <h1 className="products-title">Burger</h1>
          <div className="products-content">
            {products.map((item, index) => {
              return (
                <ProductItem
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
