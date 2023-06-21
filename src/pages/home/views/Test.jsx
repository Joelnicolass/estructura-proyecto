import React from "react";

import { motion } from "framer-motion";

const Test = ({ children, isHovered }) => {
  return (
    <motion.div initial={{ y: 100 }} animate={{ y: isHovered ? 0 : 100 }}>
      {children}
    </motion.div>
  );
};

export default Test;
