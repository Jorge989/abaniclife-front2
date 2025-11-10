import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ImageWoman from "../assets/manifest/woman.png";
import ImageHouse from "../assets/manifest/house.png";
import ImageMountains from "../assets/manifest/mountains.png";
import { useLocation } from "react-router-dom";

const BrandAndFounders = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const yOffset = -180;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const sections = [
    {
      id: "section1",
      title: "IT IS ALL ABOUT THE POSSIBILITIES",
      text: `
        Nós da ABANIC acreditamos que as pessoas são múltipas e que devem se permitir explorar todos seus interesses, capacidades e versões. Um leque de possibilidades.
      `,
      image: ImageWoman,
      reverse: false,
      hasTitle: true,
    },
    {
      id: "section2",
      text: `
        Influeniada pelo design, arte, pilares na ciência e na tecnologia para criar produtos de alta qualidade e respeito à natureza. Criamos um espaço onde podemos dialogar com as pessoas que posssuem essa autenticidade e compartilham o interesse em lançar um olhar diferente sobre as possíveis combinações de experiências transformadoras.
      `,
      image: ImageHouse,
      reverse: true,
      hasTitle: false,
    },
    {
      id: "section3",
      text: `
        Temos como propósito acompanhar as pessoas em suas jornadas pessoais em todos os momentos De maneira disruptiva e original A ABANIC é para aqueles que desejam viver todas as possibilidades!
      `,
      image: ImageMountains,
      reverse: false,
      hasTitle: false,
    },
  ];

  const imageVariants = (reverse) => ({
    hidden: { opacity: 0, x: reverse ? 150 : -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  });

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  const renderSection = ({ id, title, text, image, reverse, hasTitle }) => (
    <div
      key={id}
      id={id}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 border-none`}
      style={{ marginTop: "-10px" }}
    >
      <motion.div
        className="flex-1 flex justify-center"
        variants={imageVariants(reverse)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className={`w-full min-h-[400px] object-cover rounded-xl shadow-md ${
            id === "section1" ? "object-[center_30%]" : "object-center"
          }`}
        />
      </motion.div>

      <motion.div
        className="flex-1 space-y-4 flex flex-col justify-start"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {hasTitle && (
          <h1
            className="mb-4 leading-tight font-space-grotesk-h1 text-center"
            style={{
              color: "#F26B3A",
              letterSpacing: "2px",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "1.2",
            }}
          >
            IT IS ALL ABOUT THE <br />
            <span
              className="font-bold tracking-widest"
              style={{ fontSize: "45px" }}
            >
              POSSIBILITIES
            </span>
          </h1>
        )}
        {!hasTitle && (
          <h2 className="text-2xl md:text-3xl font-space-grotesk-h1 font-semibold text-gray-800 mb-1">
            {title}
          </h2>
        )}
        <p className="text-gray-700 text-[22px] md:text-[25px] mb-4 text-justify whitespace-pre-line leading-relaxed">
          {text}
        </p>
      </motion.div>
    </div>
  );

  return (
    <section
      className="overflow-x-hidden"
      style={{ backgroundColor: "#F1F0EB" }}
    >
      <div id="marca" className="max-w-5xl mx-auto px-6 py-10 mt-28 space-y-20">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-space-grotesk-h1">
          Manifesto da Marca
        </h1>
        <p className="text-lg md:text-xl text-abanic-gray max-w-3xl mx-auto text-center">
          Conheça um pouco da nossa marca e seus fundamentos
        </p>

        {sections.map((section) => renderSection(section))}
      </div>
    </section>
  );
};

export default BrandAndFounders;
