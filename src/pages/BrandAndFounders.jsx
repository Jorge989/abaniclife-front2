import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ManifestImage from "../assets/Manifesto.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BrandAndFounders = () => {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const yOffset = -180; // ajuste o valor conforme seu header
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <section className="max-w-7xl mx-auto px-4 mt-35 py-10 space-y-20">
      {/* Seção Marca */}
      <div id="marca" className="space-y-6">
        <h2 className="text-center text-4xl font-light text-[#494949] mb-7 mt-5">
          Manifesto da Marca
        </h2>
        <p className="text-lg md:text-xl text-abanic-gray max-w-3xl mx-auto text-center">
          Conheça um pouco da nossa marca e seus fundamentos
        </p>
        <div className="flex flex-col md:flex-row gap-6 p-4 border-none">
          <div className="flex-1 space-y-4">
            <p className="text-[18px] font-medium text-muted-foreground">
              Nós da ABANIC acreditamos que as pessoas são múltiplas e que devem
              se permitir explorar todas as suas capacidades, interesses e
              versões, criando um leque de possibilidades em suas vidas. 
              Queremos inspirar de maneira provocativa as pessoas a buscarem
              todas as suas versões, através de autocuidado, vida saudável e
              expansiva. Por isso criamos uma marca autêntica, cult e inovadora,
              influenciada pelo design, arquitetura e arte, mas que apoia seus
              principais pilares na ciência e na tecnologia para criar produtos
              de alta qualidade e respeito à natureza. Muito além de criar
              produtos, criamos um espaço onde podemos dialogar com as pessoas
              que buscam essa autenticidade e compartilham o interesse em lançar
              um olhar diferente sobre as combinações possíveis de experiências
              transformadoras. Nosso propósito é acompanhar as pessoas nas suas
              jornadas pessoais, em todos os momentos, de forma disruptiva e
              original, com uma pitada de questionamento para que as pessoas
              testem as suas habilidades, se abram para o novo e se permitam
              viver suas múltiplas facetas. A ABANIC é para aqueles que desejam
              viver todas as possibilidades! 
            </p>
          </div>
          <div className="flex-1">
            <img
              src={ManifestImage}
              alt="Foto da Marca"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAndFounders;
