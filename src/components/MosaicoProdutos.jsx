import React from "react";
import Produto from "../assets/produto.png";
import MulheresFoto from "../assets/mulheres.jpg";

const MosaicoProdutos = () => {
  const products = [
    {
      id: 1,
      name: "Hidratante com FPS50",
      brand: "Minimalist",
      image: Produto,
    },
    {
      id: 2,
      name: "Hidratante com FPS50",
      brand: "Minimalist",
      image: Produto,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Hidratante com FPS50
        </h2>

        <div className="flex flex-col gap-4">
          {" "}
          {/* Reduzi o gap para 4 */}
          {/* Linha superior - dois produtos */}
          <div className="grid grid-cols-2 gap-4">
            {" "}
            {/* Reduzi o gap para 4 */}
            {products.slice(0, 2).map((product) => (
              <div
                key={product.id}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                {" "}
                {/* Mudei para 4/3 */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  {" "}
                  {/* Reduzi o padding */}
                  <p className="font-medium text-white text-sm">
                    {product.name}
                  </p>{" "}
                  {/* Texto menor */}
                  <p className="text-xs text-white/80">{product.brand}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Linha inferior - produto grande */}
          <div className="relative aspect-[3/1] overflow-hidden rounded-lg">
            {" "}
            {/* Proporção mais baixa */}
            <img
              src={products[2].image}
              alt={products[2].name}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-lg font-medium text-white">
                {products[2].name}
              </p>{" "}
              {/* Ajuste de tamanho */}
              <p className="text-sm text-white/80">{products[2].brand}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicoProdutos;
