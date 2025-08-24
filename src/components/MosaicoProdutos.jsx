import React from "react";
import Produto from "../assets/produto.png";
import MulheresFoto from "../assets/mulheres.jpg";
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
      <div className="w-[90%] mx-auto text-center">
        <h2 className="text-4xl font-light text-[#494949] mb-7 mt-5">
          Hidratante com FPS50
        </h2>
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
                className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Card grande - ocupa coluna única */}
          <div className="relative aspect-[3/4] sm:aspect-[3/1] overflow-hidden rounded-lg">
            <img
              src={products[2].image}
              alt={products[2].name}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicoProdutos;
