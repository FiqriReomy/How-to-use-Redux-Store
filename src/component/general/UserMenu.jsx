import React from "react";
import { motion } from "framer-motion";
import { MdLogout, MdSettings } from "react-icons/md";

const UserMenu = () => {
  return (
    <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }} className="absolute top-10 w-[200px] bg-white rounded shadow-xl p-4">
      <div className="flex items-center gap-5 py-2">
        <div>
          <MdSettings size={20} />
        </div>
        <div> SETTINGS</div>
      </div>
      <div className=" flex items-center gap-5 py-2">
        <div>
          <MdLogout size={20} />
        </div>
        <div>LOGOUT</div>
      </div>
    </motion.div>
  );
};

export default UserMenu;
