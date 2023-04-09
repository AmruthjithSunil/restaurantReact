import Meal from "./Meal";
import styled from "styled-components";

const Frame = styled.div`
  border: solid;
  width: 80%;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
`;

export default function Meals({ meals }) {
  return (
    <Frame>
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </Frame>
  );
}
