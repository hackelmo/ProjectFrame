import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ICON, StWrapper } from "../Test";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Center } from "../BootStrap/BootStrap";

const Home = ({ setShowModal, currentPage }) => {
  const onClick = () => {};
  return (
    <>
      <div>aa</div>
      <Sta>박스1</Sta>
      <Stb>박스1</Stb>
      {/* <StWrapper color={ICON.color}>
        <div>aaa</div>
        <div>홈페이지입니다</div>
        <Link to={"/main"}>
          <button>메인페이지</button>
        </Link>
        <button onClick={() => setShowModal((prev) => !prev)}>
          모달ON/OFF
        </button>
        <StButton onClick={onClick}>온클릭핸들러</StButton>
        <Stdiv style={{ width: "1000px", height: "1000px" }}>a</Stdiv>
      </StWrapper> */}
    </>
  );
};

export default Home;

const StButton = styled.button`
  color: ${(props) => props.theme.color.blue};
  background-color: ${(props) => props.theme.color.blue};
`;

const Stdiv = styled.div`
  border: 1px solid green;
  ${Center}
`;

const Sta = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  box-sizing: content-box;
`;

const Stb = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  box-sizing: border-box;
`;
