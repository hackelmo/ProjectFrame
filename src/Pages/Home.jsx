import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICON, StWrapper } from "../Test";

const Home = ({ setShowModal }) => {
  return (
    <>
      <StWrapper color={ICON.color}>
        <div>홈페이지입니다</div>
        <Link to={"/main"}>
          <button>메인페이지</button>
        </Link>
        <button onClick={() => setShowModal((prev) => !prev)}>모달 버튼</button>
      </StWrapper>
    </>
  );
};

export default Home;
