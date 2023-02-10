import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StWrapper } from "../Test";

const Main = () => {
  const [a, setA] = useState(new Array(33).fill("_"));
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollTo(0, ref.current.scrollHeight);
  });
  console.log("a");
  return (
    <>
      <StWrapper>
        <StChat ref={ref}>
          {new Array(33).fill("_").map((_, i) => (
            <div key={i}>채팅{i}</div>
          ))}
          {new Array(33).fill("_").map((_, i) => (
            <div key={i}>채팅{i}</div>
          ))}
        </StChat>
        {/* <div onClick={() => setA(2)}>메인페이지입니다</div>
        <Link to={"/"}>
          <button>뒤로</button>
        </Link> */}
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
