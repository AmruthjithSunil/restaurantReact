import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CartContext from "../store/cart-context";

const Frame = styled.div`
  display: flex;
  background-color: brown;
  color: white;
`;

const Heading = styled.h1`
  margin-left: 50px;
`;

const Cart = styled.div`
  display: flex;
  text-align: center;
  background-color: darkred;
  position: absolute;
  right: 50px;
  margin: 10px;
  border-radius: 50px;
  width: 180px;
  padding-left: 50px;
`;

const Counter = styled.div`
  margin: auto;
  height: 25px;
  width: 40px;
  padding-top: 5px;
  border-radius: 20px;
  background-color: brown;
  color: white;
`;

export default function Header({ cartClickHandler }) {
  const cartCtx = useContext(CartContext);

  const [totalCartItems, setTotalCartItems] = useState(
    cartCtx.items.reduce(
      (currentTotal, item) => currentTotal + item.quantity,
      0
    )
  );

  useEffect(() => {
    setTotalCartItems(
      cartCtx.items.reduce(
        (currentTotal, item) => currentTotal + item.quantity,
        0
      )
    );
  }, [cartCtx.items]);

  return (
    <Frame>
      <Heading>ReactMeals</Heading>
      <Cart onClick={cartClickHandler}>
        <h4>Your Cart</h4>
        <Counter>{cartCtx.totalQuantity}</Counter>
      </Cart>
    </Frame>
  );
}
