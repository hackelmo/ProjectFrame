import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import "../Fonts/pretendard.css";

const StGlobalStyle = createGlobalStyle`
// & === index.css && index.js에 import 후 사용
${normalize}
/* 어떤 브라우저에서든지 우리가 원하는 스타일을 보여줄 수 있다. */

//버튼 전에 저런내용을 넣어라 
/* button::before{
    content:'버튼'
 } */

*, *::before, *::after {
    box-sizing: border-box;
  }

   

  body {
    
  margin: 0;
  padding: 0;
  color: white;
  font-family:'Pretendard';
  /* font-family: "Quicksand"; */
  letter-spacing: 2px;
  background: rgb(126, 202, 21);
  background: radial-gradient(circle, rgb(22, 172, 29) 0%, rgb(8, 72, 7) 100%);
  overflow: hidden;
}

button {
  color: #fff;
  background: transparent;
  font-size: 1em;
  border-radius: 50px;
  border: 1px solid white;
  cursor: pointer;
  opacity: 0.9;
  padding: 10px 30px;
}


body {
    /* background-image: url('/images/background.png'); */
    background-size: cover;
    height: 100vh;
    background-color: #2b2b2b;
    //div박스 선택안되게하기
    //크로스브라우징을위해서 적용한다
    -webkit-user-select:none;
    //사파리
    -moz-user-select:none;
    //파폭
    -ms-user-select:none;
    //익스플로러
    -o-user-select:none;
    //오페라
    user-select:none
  }
  `;

export default StGlobalStyle;
