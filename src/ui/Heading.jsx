import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 80px;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 50px;
      font-weight: 500;
    `}

    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 30px;
      font-weight: 600;
      text-align: center;
    `}
    /* line-height: 80px */
`;

export default Heading;
