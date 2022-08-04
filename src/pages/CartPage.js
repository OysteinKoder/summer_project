import { PageContainer } from "./storePage/styles";
import {
  StyledCard,
  StyledImage,
  StyledParagraph,
  StyledBtn,
} from "./storePage/styles";

const CartPage = () => {
  let finalCart = localStorage.getItem("cart");
  let renderCart = JSON.parse(finalCart);
  console.log(JSON.parse(finalCart));
  return (
    <PageContainer>
      <h2>Cart</h2>

      {renderCart.map((item) => {
        return (
          <StyledCard key={item.id}>
            <StyledImage src={item.image}></StyledImage>
            <StyledParagraph>{item.title}</StyledParagraph>
            <StyledParagraph>{item.price} $</StyledParagraph>
          </StyledCard>
        );
      })}
    </PageContainer>
  );
};

export default CartPage;
