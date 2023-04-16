import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../../redux/action/counterAction";

const ModalProduct = ({ data }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.counter);
  return (
    <motion.div
      onClick={() => dispatch(handleOpen(!isOpen))}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      exit={{ y: ["0%", "100%"] }}
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/20 z-[999] flex_center"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        exit={{ y: ["0%", "100%"] }}
        className="h-[300px] w-[220px] bg-white"
      >
        <button onClick={() => dispatch(handleOpen(!isOpen))}>close</button>
        <p>{data.title}</p>
      </motion.div>
    </motion.div>
  );
};
export default ModalProduct;
