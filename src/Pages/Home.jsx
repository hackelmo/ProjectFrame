import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BootStrap, Center } from "../BootStrap/BootStrap";
import Test from "../Elements/Test";

// const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_KAKAO_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT}kakao&response_type=code`;

const Home = ({ setShowModal }) => {
  const { StWrapper } = BootStrap;
  const [valueForFirstChild, setValueForFirstChild] = useState(null);
  const handleClick = useCallback(() => {}, []);

  return (
    <StWrapper>
      <Link to={"/main"}>
        <button>메인페이지</button>
      </Link>
      <button onClick={() => setShowModal((prev) => !prev)}>모달ON</button>
      <a href={"https://www.naver.com"}>
        <button>카카오 로그인</button>
      </a>
      <button onClick={() => setValueForFirstChild((pr) => pr + 1)}>
        ㅎㅎㅎ
      </button>
      <Test handleClick={handleClick}></Test>
    </StWrapper>
  );
};

export default Home;

const StButton = styled.button`
  color: ${(props) => props.theme.color.blue};
  background-color: ${(props) => props.theme.color.blue};
`;

const Stdv = styled.div`
  border: 1px solid green;
  ${Center}
`;
