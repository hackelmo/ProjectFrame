import { motion } from "framer-motion";
import styled from "styled-components";

export const ICON = { color: "green" };

export const StWrapper = styled(motion.div)`
  max-width: ${({ width }) => width || "400px"};
  margin: 100px auto 40px;
  text-align: center;
  color: ${({ color }) => color || "white"};
`;

// export const d =
