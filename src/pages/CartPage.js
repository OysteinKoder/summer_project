const CartPage = () => {
  return (
    <PageContainer>
      <h2>Cart</h2>
      <StyledContainer>
        {data.map((item) => {
          return (
            <StyledCard key={item.id}>
              <StyledImage src={item.image}></StyledImage>
              <StyledParagraph>{item.title}</StyledParagraph>
              <StyledParagraph>{item.price} $</StyledParagraph>
              <StyledBtn>Remove</StyledBtn>
            </StyledCard>
          );
        })}
      </StyledContainer>
    </PageContainer>
  );
};

export default CartPage;
