import React, { useMemo } from "react";

const Test = ({ handleClick }) => {
  console.log("test입니다");
  return (
    <>
      {new Array(10).fill("_").map((e, i) => (
        <br key={i} />
      ))}
      <button onClick={handleClick}>Click Here</button>
    </>
  );
};

export default Test;
