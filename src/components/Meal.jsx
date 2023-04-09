import styled from "styled-components";

const Frame = styled.div`
  border-bottom: solid 1px;
`;

const Name = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  font-weight: bold;
`;

const Description = styled.div`
  font-style: italic;
  margin-left: 30px;
`;

const Price = styled.div`
  color: darkred;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export default function Meal({ meal }) {
  return (
    <Frame>
      <Name>{meal.name}</Name>
      <Description>{meal.description}</Description>
      <Price>${meal.price}</Price>
    </Frame>
  );
}
