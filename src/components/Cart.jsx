import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../store/cart-context";

const Frame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000c;
`;

const Overlay = styled.div`
  position: fixed;
  width: 550px;
  background-color: #fff;
  top: 20%;
  left: 32%;
  border-radius: 10px;
  padding-bottom: 20px;
  z-index: 10;
  @media (max-width: 1300px) {
    left: 25%;
  }
  @media (max-width: 1000px) {
    left: 20%;
  } ;
`;

const Name = styled.div`
  margin: 10px;
  padding-top: 10px;
`;

const Amount = styled.div`
  display: flex;
`;

const Right = styled.div`
  margin-left: auto;
`;

const ButtonLight = styled.button`
  color: brown;
  border-color: brown;
  border-radius: 50px;
  width: 80px;
  height: 30px;
  margin-right: 20px;
  margin-left: 350px;
`;

const ButtonDark = styled.button`
  color: white;
  background-color: darkred;
  border-radius: 50px;
  width: 80px;
  height: 30px;
`;

const H1 = styled.h1`
  margin-left: 15px;
  margin-right: 15px;
`;

const BackDrop = styled.div`
  position: relative;
  z-index: -1;
  background-color: #111a;
  height: 100%;
  width: 100%;
`;

export default function Cart({ cartClickHandler }) {
  const cartCtx = useContext(CartContext);

  return (
    <Frame>
      <BackDrop onClick={cartClickHandler} />
      <Overlay>
        {cartCtx.items.map((item) => (
          <Name key={item.id}>
            {item.name} : {item.quantity}
          </Name>
        ))}
        <Amount>
          <H1>Total Amount</H1>
          <Right>
            <H1>{Math.round(cartCtx.totalAmount)}</H1>
          </Right>
        </Amount>
        <Right>
          <ButtonLight onClick={cartClickHandler}>Close</ButtonLight>
          <ButtonDark>Order</ButtonDark>
        </Right>
      </Overlay>
    </Frame>
  );
}
