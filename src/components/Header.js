import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <StHeader>
      <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 50 }}
        dragElastic={0.5}
      >
        <StPizzaSvg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </StPizzaSvg>
      </motion.div>
      <StTitle
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <div>Study Joint</div>
      </StTitle>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  padding: 40px;
  align-items: center;
`;

const StPizzaSvg = styled(motion.svg)`
  width: 80px;
  overflow: visible;
  stroke: #fff;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

const StTitle = styled(motion.div)`
  flex-grow: 1;
  margin-left: 20px;
  font-size: 1.2em;
  & div {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
  }
`;

const Stinput = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
`;
