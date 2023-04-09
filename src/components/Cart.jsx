import styled from "styled-components";

const Frame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000c;
`;

const Box = styled.div`
  width: 550px;
  height: 170px;
  background-color: #fff;
  margin: auto;
  margin-top: 12%;
  border-radius: 10px;
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

export default function Cart() {
  return (
    <Frame>
      <Box>
        <Name>Sushi</Name>
        <Amount>
          <H1>Total Amount</H1>
          <Right>
            <H1>35.62</H1>
          </Right>
        </Amount>
        <Right>
          <ButtonLight>Close</ButtonLight>
          <ButtonDark>Order</ButtonDark>
        </Right>
      </Box>
    </Frame>
  );
}
