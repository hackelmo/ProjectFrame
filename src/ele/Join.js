import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Join = ({ setShowModal }) => {
  return (
    <StWrapper>
      <p>Want to make another pizza?</p>
      <Link to="/">
        <button onClick={() => setShowModal(false)}>Start Again</button>
      </Link>
    </StWrapper>
  );
};

export default Join;

const StWrapper = styled.div`
  color: black;
  & button {
    border: 1px solid black;
    color: black;
  }
`;
