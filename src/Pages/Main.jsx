import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BootStrap } from "../BootStrap/BootStrap";

const Main = () => {
  const { StWrapper } = BootStrap;
  return (
    <>
      <StWrapper>
        <Link to={"/"}>
          <button>뒤로</button>
        </Link>
      </StWrapper>
    </>
  );
};

export default Main;

const StChat = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid skyblue;
  overflow: hidden;
  overflow-y: scroll;
`;
