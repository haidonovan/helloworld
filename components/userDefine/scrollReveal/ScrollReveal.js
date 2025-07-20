"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollReveal() {
  const [ref, inView] = useInView({
    triggerOnce: true, // animate once
    threshold: 0.1,     // trigger when 10% visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        margin: "100px 0",
        padding: "40px",
        background: "#f0f0f0",
        borderRadius: "8px",
        textAlign: "center"
      }}
    >
      <h2>This section slides in when visible!</h2>
    </motion.div>
  );
}
