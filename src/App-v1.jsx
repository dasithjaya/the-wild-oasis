import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledDiv = styled.div`
  margin: 40px;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <Row>
          <Row type="horizontal">
            <Heading type="h1">The Wild Oasis</Heading>
            <div>
              <Heading type="h2">Check in and out</Heading>
              <Button onClick={() => alert("Checked in..")}>Check-in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Checked out..")}
              >
                Check-out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Enter age" />
              <Input type="text" placeholder="Enter name" />
            </form>
          </Row>
        </Row>
      </StyledDiv>
    </>
  );
}
