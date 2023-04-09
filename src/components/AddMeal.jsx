import styled from "styled-components";

const Frame = styled.div`
  margin: 30px 30px 30px auto;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 30px;
  border-radius: 5px;
`;

const Submit = styled.button`
  background-color: darkred;
  color: #ddd;
  font-weight: bold;
  width: 90px;
  height: 25px;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: 5px;
`;

export default function AddMeal() {
  return (
    <Frame>
      <form>
        <Label htmlFor="amount">Amount</Label>
        <Input type="number" id="amount" value={1} name="amount" readOnly />
        <br />
        <Submit type="submit">+Add</Submit>
      </form>
    </Frame>
  );
}
