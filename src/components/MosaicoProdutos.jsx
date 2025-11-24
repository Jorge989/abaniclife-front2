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
      <div className="w-full max-w-[100%] mx-auto text-center">
        <div className="flex flex-col gap-4 w-full">
          {/* Imagens de cima */}
          <div className="flex flex-col w-full gap-6">
            {products.slice(0, 2).map((product, index) => (
              <motion.div
                key={product.id}
                className="w-full h-[550px] overflow-hidden rounded-xl" // altura controlada
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
                  className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-500"
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
            {/* Conteúdo interno */}
            <div
              className="
        flex flex-col lg:flex-row 
        justify-between 
        items-center lg:items-start 
        w-full mx-auto 
        pt-2 pb-8 lg:pb-10 gap-0
      "
            >
              {/* Texto */}
              <motion.div
                className="
          flex flex-col justify-center 
          w-full lg:w-[60%] text-justify
          px-4 lg:px-0 lg:pl-12
        "
                initial={{ opacity: 0, x: -100, scale: 0.95 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.9, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 text-base lg:text-[22px] leading-loose pt-4 lg:pr-10">
                  <b>3 Passos</b> essenciais que reúnem múltiplos benefícios
                  para os cuidados necessários com sua pele. Desenvolvidos com
                  ativos naturais extraídos de
                  <b>
                    {" "}
                    algas vermelhas, flores de margaridas e esqualano vegetal
                  </b>
                  com propriedades
                  <b> antioxidantes, clareadoras e iluminadoras.</b> <br />
                  Além de ativos que oferecem
                  <b> regeneração, equilíbrio da oleosidade</b> e fortalecem a
                  barreira cutânea contra agressões externas como poluição, luz
                  visível e radicais livres.
                </p>
              </motion.div>

              {/* Imagem */}
              <motion.div
                className="
          flex justify-center lg:justify-end 
          items-center 
          w-full lg:w-[50%] 
          mt-6 lg:mt-0
        "
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.9, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <div className="relative w-full flex justify-center lg:justify-end">
                  <img
                    src={products[2].image}
                    alt={products[2].name}
                    className="
              w-full max-w-none 
              lg:max-w-[600px]   /* imagem maior */
              object-cover lg:object-contain
              transition-transform duration-500 hover:scale-[1.03]
              rounded-lg shadow-sm
            "
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
