import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledBtn,
  StyledCard,
  StyledContainer,
  StyledImage,
  StyledParagraph,
  PageContainer,
} from "./storePage/styles";
import { Link } from "react-router-dom";

// This file renders the StorePage and contains items you can add to basket for later purchase

const StorePage = () => {
  // States used for api calls, data will contain shopping items, apiError is a bool that is self explaining
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();

  let currentCart = [];

  // function that fetches the items for the shop-able items
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch(setApiError(true));
  };

  //useEffect fires getData on pageload
  useEffect(() => {
    getData();
  }, []);

  // if the data exists it will return the items, if not se else if and else
  if (data) {
    return (
      <>
        <PageContainer>
          <h2>Store</h2>
          <StyledContainer>
            {data.map((item) => {
              return (
                <StyledCard key={item.id}>
                  <StyledImage src={item.image}></StyledImage>
                  <StyledParagraph>{item.title}</StyledParagraph>
                  <StyledParagraph>{item.price} $</StyledParagraph>
                  <StyledBtn
                    onClick={() => {
                      currentCart.push(item);
                      console.log(currentCart);
                    }}
                  >
                    Buy
                  </StyledBtn>
                </StyledCard>
              );
            })}
          </StyledContainer>
          <Link to="/cart-page">
            <StyledBtn
              onClick={() => {
                localStorage.setItem("cart", JSON.stringify(currentCart));
              }}
            >
              To Cart
            </StyledBtn>
          </Link>
        </PageContainer>
      </>
    );
  }

  // If there has been an api error this message will be rendered
  else if (apiError) {
    return (
      <div>
        <h2>api</h2>
        <article>
          <p>Content failed to load, please try again</p>
        </article>
      </div>
    );
  }

  // if the content is still loading this will be rendered
  else {
    return (
      <div>
        <h2>Loading...</h2>
        <article>
          <p>The content is loading</p>
        </article>
      </div>
    );
  }
};

export default StorePage;
