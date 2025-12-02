import React from "react";
import { motion } from "framer-motion";

const ProductActive = () => {
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
           mb-28
           font-space-grotesk-h1
           text-center
           text-gray-800
           px-6           /* adiciona margem lateral no mobile */
           sm:px-8        /* um pouco mais em tablets */
           md:px-0        /* remove no desktop */
         "
    >
      COM ATIVOS <b>PRÓ-AGING,</b> <b>HIDRATANTES</b> QUE RELEVAM A{" "}
      <b>LUMINOSIUDADE</b> DA SUA PELE. DESENVOLVIDOS ATRAVÉS DA{" "}
      <b>CIÊNCIA E SUSTENTABILIDADE.</b>
    </motion.p>
  );
};

export default ProductActive;
