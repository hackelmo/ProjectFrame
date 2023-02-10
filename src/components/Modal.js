import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ width, showModal, children, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <StBackDrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <StModal
            width={width}
            variants={modal}
            initial="hidden"
            animate="visible"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </StModal>
        </StBackDrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;

const StBackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModal = styled(motion.div)`
  width: ${({ width }) => width};
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  text-align: center;
  z-index: 2;
`;
