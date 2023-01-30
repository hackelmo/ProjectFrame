import React from "react";
import { Link } from "react-router-dom";
import { StWrapper } from "../Test";
const Main = () => {
  return (
    <>
      <StWrapper>
        <div>메인페이지입니다</div>
        <Link to={"/"}>
          <button>뒤로</button>
        </Link>
      </StWrapper>
    </>
  );
};

export default Main;
