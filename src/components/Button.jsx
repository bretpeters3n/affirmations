import * as React from "react";
import styled from "styled-components";

function MyButton(props) {
  return <Div className={'btn'} >{props.text}</Div>;
}

const Div = styled.div`
border: 2px solid var(--primaryColor);
background-color: var(--backgroundColor);
color: var(--primaryColor);
white-space: no-wrap;
border-radius: 40px;
padding: 0.6em 1.2rem;
font-size: 1rem;
font-weight: 500;
font-family: inherit;
cursor: pointer;
transition: border-color 0.25s;
transition: background-color 0.25s;
margin-inline-start: 8px;
margin-inline-end: 8px;
margin: 8px;
writing-mode: horizontal-tb;
  @media (max-width: 991px) {
    white-space: initial;
  }
  &:hover {
    border: 2px solid var(--primaryBtnColor);
    background-color: var(--primaryBtnColor);
    color: var(--backgroundColor);
  }
`;

export default MyButton;