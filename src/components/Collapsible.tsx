import React, { useState } from "react";
import ReturnButton from "./button/ReturnButton";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  trigger: string;
};

const Collapsible = ({ trigger, children }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div
      className="mt-0"
      style={{
        // borderBottom: "1px solid rgba(255,255,255,.3)",
        borderTop: "1px solid rgba(255,255,255,.3)",
      }}
    >
      <div
        className="pb-4 pt-2 cursor-pointer flex flex-row"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div>{trigger}</div>
        <div className="ml-auto mt-1">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            className="w-2 stroke-white "
            animate={{
              rotate: isOpened ? -90 : 90,
            }}
          >
            <path d="M7 1L2 6L7 11" stroke-width="1.5" />
          </motion.svg>
        </div>
      </div>
      <motion.div
        className="opacity-70 overflow-hidden font-normal text-body"
        initial={{ height: "0" }}
        animate={{ height: isOpened ? "auto" : "0" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Collapsible;
