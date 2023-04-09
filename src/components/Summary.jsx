import styled from "styled-components";

const Frame = styled.div`
  margin: auto;
  margin-top: 1px;
  padding: 1px 10px;
  width: 70%;
  max-width: 600px;
  text-align: center;
  color: #ddd;
  border-radius: 10px;
  background-color: #555;
`;

export default function Summary() {
  return (
    <Frame>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Frame>
  );
}
