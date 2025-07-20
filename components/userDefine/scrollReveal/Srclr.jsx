





"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Srclr({ children }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}                // start 100px to the left
      animate={inView ? { opacity: 1, x: 0 } : {}}     // slide into position
      transition={{ duration: 0.6, ease: "easeOut" }}  // feel free to tweak duration
    >
      {children}
    </motion.div>
  );
}
