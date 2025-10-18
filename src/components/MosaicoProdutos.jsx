import React from "react";
import Produto from "../assets/produto.png";
import MulheresFoto from "../assets/Trocam.png";
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
      image: MulheresFoto,
    },
  ];

  return (
    <div className="py-12" style={{ backgroundColor: "#F1F0EB" }}>
      <div className="w-full max-w-[90%] mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-space-grotesk-h1">
          Hidratante com FPS50
        </h1>
        <p className="text-lg md:text-xl text-abanic-gray mb-10">
          Hidratante multifuncional com proteção.
        </p>

        <div className="flex flex-col gap-4">
          {/* Mobile: Uma foto abaixo da outra */}
          {/* Desktop: Duas em cima, uma embaixo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.slice(0, 2).map((product) => (
              <div
                key={product.id}
                className="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Card grande - ocupa coluna única */}
          <div className="relative w-full h-0 pb-[75%] sm:pb-[33%] overflow-hidden rounded-lg">
            <img
              src={products[2].image}
              alt={products[2].name}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicoProdutos;
