import styled from "styled-components";

const HeaderFrame = styled.div`
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

export default function Header() {
  return (
    <HeaderFrame>
      <Heading>ReactMeals</Heading>
      <Cart>
        <h4>Your Cart</h4>
        <Counter>0</Counter>
      </Cart>
    </HeaderFrame>
  );
}
