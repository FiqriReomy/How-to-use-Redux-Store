import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { handleActive } from "../../redux/action/counterAction";

const ModalBox = () => {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state) => state.counter);
  return (
    <motion.div
      onClick={() => dispatch(handleActive(!isActive))}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      exit={{ y: ["0%", "100%"] }}
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 z-[999] flex_center"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        exit={{ y: ["0%", "100%"] }}
        className="h-[300px] w-[220px] bg-white"
      >
        <button onClick={() => dispatch(handleActive(!isActive))}>close</button>
      </motion.div>
    </motion.div>
  );
};

export default ModalBox;
