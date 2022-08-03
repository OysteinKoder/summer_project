import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

// https://fakestoreapi.com/products

function App() {
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch(setApiError(true));
  };
  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <div>
        <h2>Store</h2>
        <article>
          {data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
        </article>
      </div>
    );
  } else if (apiError) {
    return (
      <div>
        <h2>api</h2>
        <article>
          <p>Content failed to load, please try again</p>
        </article>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Cat Fact Page</h2>
        <article>
          <p>The content is loading</p>
        </article>
      </div>
    );
  }
}

export default App;
