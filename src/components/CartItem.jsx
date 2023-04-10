import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../store/cart-context";

const Frame = styled.div`
  padding: 10px 20px 10px 20px;
  border-bottom: solid 2px darkred;
  line-height: 10px;
  display: flex;
`;

const Price = styled.p`
  color: darkred;
  font-weight: bold;
`;

const PriceQuantity = styled.div`
  display: flex;
`;

const Quantity = styled.div`
  border: solid 1px;
  border-color: #0003;
  height: 20px;
  padding: 5px 10px 0 10px;
  margin: 10px 30px;
  font-weight: bold;
  border-radius: 3px;
`;

const Buttons = styled.div`
  margin: 35px 10px 0 auto;
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  margin: 5px;
  background-color: white;
  border: solid 1.5px;
  border-radius: 5px;
  border-color: #8b000080;
  color: #8b000080;
  &:hover {
    background-color: #8b0000;
    color: white;
  }
`;

export default function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  function addClickHandler() {
    console.log(`add ${item.name}`);
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: 1,
    });
  }

  function subtractClickHandler() {
    console.log(`subtract ${item.name}`);
    cartCtx.removeItem(item.id);
  }

  return (
    <Frame>
      <div>
        <h2>{item.name}</h2>
        <PriceQuantity>
          <Price>${item.price}</Price>
          <Quantity>x{item.quantity}</Quantity>
        </PriceQuantity>
      </div>
      <Buttons>
        <Button onClick={subtractClickHandler}>-</Button>
        <Button onClick={addClickHandler}>+</Button>
      </Buttons>
    </Frame>
  );
}
