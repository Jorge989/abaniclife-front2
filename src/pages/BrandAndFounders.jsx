import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProductImage from "../assets/produto.png";
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-abanic-gray-dark mb-4 text-center">
          Marca
        </h2>
        <p className="text-lg md:text-xl text-abanic-gray max-w-3xl mx-auto text-center">
          Conheça um pouco da nossa marca e seus fundamentos
        </p>
        <div className="flex flex-col md:flex-row gap-6 p-4 border-none">
          <div className="flex-1 space-y-4">
            <p className="text-[18px] font-medium text-muted-foreground">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief. There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.Lorem ipsum dolor sit amet, adipiscing Aliquam eu
              semvitae turpmaximus.posuere in.Contrary popular belief.There are
              many variations of passages of Lorem Ipsum available, but the
              majority randomised.Lorem ipsum dolor sit amet, adipiscing Aliquam
              eusemvitae turpmaximus.posuere in.Contrary popular belief.There
              are many variations of passages of Lorem Ipsum available, but the
              majority randomised.Lorem ipsum dolor sit amet, adipiscing Aliquam
              eu semvitae turpmaximus.posuere in.Contrary popular belief.There
              are many variations of passages of Lorem Ipsum available, but the
              majority randomised.Lorem ipsum dolor sit amet, adipiscing Aliquam
              eu sem vitae turpmaximus.posuere in.Contrary popular belief. There
              are many variations of passages of Lorem Ipsum available, but the
              majority randomised.y popular belief. There are many variations of
              passages of Lorem Ipsum available, but the majority randomised.y
              popularany variations of passages of Lorem Ipsum available, but
              the majority randomised.
            </p>
            <p className="text-sm text-muted-foreground">
              ...by injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum...
            </p>
          </div>
          <div className="flex-1">
            <img
              src={ProductImage} // Substitua pelo path correto
              alt="Foto da Marca"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Seção Fundadoras */}
      <div id="fundadoras" className="space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-abanic-gray-dark mb-4 text-center">
          Fundadoras
        </h2>
        <p className="text-lg md:text-xl text-abanic-gray max-w-3xl mx-auto text-center">
          Conheça um pouco da nossa marca e seus fundamentos
        </p>
        <div className="flex flex-col md:flex-row-reverse gap-6 p-4">
          <div className="flex-1 space-y-4">
            <p className="text-[18px] font-medium text-muted-foreground">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief. There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.Lorem ipsum dolor sit amet, adipiscing Aliquam eu
              semvitae turpmaximus.posuere in.Contrary popular belief.There are
              many variations of passages of Lorem Ipsum available, but the
              majority randomised.Lorem ipsum dolor sit amet, adipiscing Aliquam
              eusemvitae turpmaximus.posuere in.Contrary popular belief.There
              are many variations of passages of Lorem Ipsum available, but the
              majority randomised.Lorem ipsum dolor sit amet, adipiscing Aliquam
              eu semvitae turpmaximus.posuere in.Contrary popular belief.There
              are many variations of passages of Lorem Ipsum available, but the
              majority randomised.Lorem ipsum dolor sit amet, adipiscing Aliquam
              eu sem vitae turpmaximus.posuere in.Contrary popular belief. There
              are many variations of passages of Lorem Ipsum available, but the
              majority randomised.y popular belief. There are many variations of
              passages of Lorem Ipsum available, but the majority randomised.y
              popularany variations of passages of Lorem Ipsum available, but
              the majority randomised.
            </p>
            <p className="text-[18px] font-medium text-muted-foreground">
              ...by injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum...
            </p>
          </div>
          <div className="flex-1">
            <img
              src={ProductImage} // Substitua pelo path correto
              alt="Foto das Fundadoras"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAndFounders;
