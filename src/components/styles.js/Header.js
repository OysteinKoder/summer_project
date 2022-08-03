import { HeaderContainer, StyledLink } from "./styles";
import { Routes, Route, Link } from "react-router-dom";
import StorePage from "../../pages/StorePage";

const Header = () => {
  return (
    <HeaderContainer>
      <h1 style={{ color: "black" }}>Summer Store</h1>
      <nav>
        <StyledLink to="/store-page">Store</StyledLink>
        <StyledLink to="/cart-page">Cart</StyledLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
