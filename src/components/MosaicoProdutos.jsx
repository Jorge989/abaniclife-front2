import React from "react";
import Produto from "../assets/produto.png";
import MulheresFoto from "../assets/mulheres.jpg";
import CouplePicture from "../assets/Casal.jpg";
import FotoCreme from "../assets/FotoCreme.jpg";
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
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-abanic-gray-dark mb-4">
          Hidratante com FPS50
        </h2>

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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                  <p className="font-medium text-white text-sm sm:text-base">
                    {product.name}
                  </p>
                  <p className="text-xs sm:text-sm text-white/80">
                    {product.brand}
                  </p>
                </div>
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
              <p className="text-lg sm:text-xl font-medium text-white">
                {products[2].name}
              </p>
              <p className="text-sm sm:text-base text-white/80">
                {products[2].brand}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicoProdutos;
