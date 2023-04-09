import Meal from "./Meal";
import styled from "styled-components";
import AddMeal from "./AddMeal";

const Frame = styled.div`
  border: solid;
  width: 80%;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
`;

const List = styled.div`
  border-bottom: solid 1px;
  display: flex;
`;

export default function Meals({ meals }) {
  return (
    <Frame>
      {meals.map((meal) => (
        <List key={meal.id}>
          <Meal meal={meal} />
          <AddMeal />
        </List>
      ))}
    </Frame>
  );
}
