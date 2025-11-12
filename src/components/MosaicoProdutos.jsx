import React from "react";
import { motion } from "framer-motion";
import Produto from "../assets/produto.png";
import MulherCreme from "../assets/home/MulherCreme.jpg";
import CouplePicture from "../assets/Produtoladodireito.png";
import FotoCreme from "../assets/Produtoladoesquerdo.png";

const MosaicoProdutos = () => {
  const products = [
    {
      id: 1,
      name: "Hidratante com FPS50",
      brand: "Minimalist",
      image: FotoCreme,
    },
    {
      id: 2,
      name: "Hidratante com FPS50",
      brand: "Minimalist",
      image: CouplePicture,
    },
    {
      id: 3,
      name: "Hidratante com FPS50",
      brand: "Minimalist",
      image: MulherCreme,
    },
  ];

  return (
    <div className="py-12" style={{ backgroundColor: "#F1F0EB" }}>
      <div className="w-full max-w-[90%] mx-auto text-center">
        <div className="flex flex-col gap-4">
          {/* Imagens de cima */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.slice(0, 2).map((product, index) => (
              <motion.div
                key={product.id}
                className="relative w-full h-0 pb-[65%] overflow-hidden rounded-lg"
                initial={{
                  opacity: 0,
                  x: index === 0 ? -100 : 100,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Card grande */}
          <motion.div
            className="relative w-full rounded-lg"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: true }}
          >
            {/* Label laranja */}
            <motion.div
              className="w-full bg-[#E4572E] text-white py-3 text-[22px] font-semibold z-10 text-center rounded-t-lg"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
              }}
              viewport={{ once: true }}
            >
              RHODY SENCE Linha de cuidados essenciais e escolha diária para as
              suas múltiplas versões
            </motion.div>

            {/* Conteúdo interno */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full mx-auto pt-2 pb-8 lg:pt-4 lg:pb-10 gap-0">
              {/* Texto */}
              <motion.div
                className="flex flex-col justify-start w-full lg:w-[60%] text-justify"
                initial={{ opacity: 0, x: -100, scale: 0.95 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.9, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 text-base lg:text-[22px] leading-relaxed pt-4 pr-0 pb-0 pl-0 lg:pt-0 lg:pr-10 lg:pb-0 lg:pl-0">
                  <b>3 passos</b> essenciais que reúnem múltiplos benefícios
                  para os cuidados necessários com sua pele. Desenvolvidos com
                  ativos naturais extraídos de
                  <b>
                    {" "}
                    algas vermelhas, flores de margaridas e esqualano vegetal
                  </b>
                  com propriedades
                  <b> antioxidantes, clareadoras e iluminadoras.</b> Além de
                  ativos que oferecem
                  <b> regeneração, equilíbrio da oleosidade</b> e fortalecem a
                  barreira cutânea contra agressões externas como poluição, luz
                  visível e radicais livres — <b>100% natural.</b>
                </p>
              </motion.div>

              {/* Imagem */}
              <motion.div
                className="flex justify-end items-start w-full lg:w-[40%] mt-6 lg:mt-0"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.9, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <div className="relative w-full flex justify-end">
                  <img
                    src={products[2].image}
                    alt={products[2].name}
                    className="w-full max-w-[500px] object-contain transition-transform duration-500 hover:scale-[1.03] rounded-lg shadow-sm"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MosaicoProdutos;
