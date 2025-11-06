import React from "react";
import { motion } from "framer-motion";

const BreadText = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        mt-40
        text-[36px]
        leading-normal
        text-abanic-gray
        max-w-4xl
        mx-auto
        mb-35
        font-space-grotesk-h1
        text-center
      "
    >
      COM FÓRMULAS LEVES E CONCENTRADAS EM ATIVOS A LINHA <b>RHODY SENCE</b>{" "}
      REÚNE OS PASSOS ESSENCIAIS PARA SUA ROTINA DE AUTO CUIDADO.
    </motion.p>
  );
};

export default BreadText;
