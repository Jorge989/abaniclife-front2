import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
const CultureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef(null);

  // const articles = [
  //   {
  //     id: 1,
  //     title: "Opening Day Of Boating Season",
  //     description: "Of course the Puget Sound is very watery...",
  //     image:
  //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //     category: "Lifestyle",
  //   },
  //   {
  //     id: 2,
  //     title: "How To Choose The Right Laptop",
  //     description: "Choosing the right laptop for programming...",
  //     image:
  //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //     category: "Technology",
  //   },
  //   {
  //     id: 3,
  //     title: "How We Built The First Self-Driving Car",
  //     description: "Electric self-driving cars will save millions...",
  //     image:
  //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //     category: "Innovation",
  //   },
  //   {
  //     id: 4,
  //     title: "How To Persuade Your Parents",
  //     description: "Parents often don't want to...",
  //     image:
  //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //     category: "Lifestyle",
  //   },
  //   {
  //     id: 5,
  //     title: "Another Awesome Article",
  //     description: "More content that keeps the user scrolling...",
  //     image:
  //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //     category: "Culture",
  //   },
  //   {
  //     id: 6,
  //     title: "The Future of Design",
  //     description: "Exploring new trends in modern design...",
  //     image:
  //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //     category: "Design",
  //   },
  // ];

  // Atualiza o número de itens visíveis conforme o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // mobile: mostrar 1 item (mas cada item tem 16% de width)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Limite máximo para o índice do slide
  const maxIndex =
    window.innerWidth < 768
      ? articles.length - 1 // só rola um por vez no mobile
      : articles.length - itemsPerView;

  const scrollContainerByIndex = (index) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;

    let scrollAmount;

    if (window.innerWidth < 768) {
      // No mobile, rola 100% da largura do container por índice
      scrollAmount = containerWidth * index;
    } else {
      scrollAmount = (containerWidth / itemsPerView) * index;
    }

    containerRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Botões de navegação atualizam índice e rolam o container
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.min(prev + 1, maxIndex);
      scrollContainerByIndex(newIndex);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.max(prev - 1, 0);
      scrollContainerByIndex(newIndex);
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    const newIndex = Math.min(index, maxIndex);
    setCurrentIndex(newIndex);
    scrollContainerByIndex(newIndex);
  };

  return (
    <section
      className="py-16"
      id="cultura"
      style={{ backgroundColor: "#F1F0EB" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-space-grotesk-h1">
            ABANIC LIFE
          </h1>
          <p className="text-lg md:text-xl text-abanic-gray max-w-3xl mx-auto">
            Acompanhe com a ABANIC as últimas novidades sobre cultura e
            tenedências.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed rounded-full w-12 h-12 transition-smooth"
            aria-label="Artigos anteriores"
          >
            <ChevronLeft className="h-6 w-6 text-abanic-gray" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed rounded-full w-12 h-12 transition-smooth"
            aria-label="Próximos artigos"
          >
            <ChevronRight className="h-6 w-6 text-abanic-gray" />
          </Button>

          {/* Cards Container */}
          <div className="overflow-hidden" ref={containerRef}>
            <div className="flex">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex-shrink-0 px-1.5"
                  style={{
                    width:
                      window.innerWidth < 768
                        ? "100%"
                        : `${100 / itemsPerView}%`,
                  }}
                >
                  <Card className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Link to={`/blog/${article.id}`}>
                      <div className="relative w-full">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 rounded-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-white/90 text-abanic-gray text-xs font-medium px-2 py-1 rounded-full shadow">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-lg font-semibold text-abanic-gray-dark mb-2 group-hover:text-orange-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-abanic-gray text-sm leading-relaxed line-clamp-2">
                          {article.description}
                        </p>
                        <div className="mt-2">
                          <span className="text-orange-600 text-sm font-medium group-hover:text-orange-700 transition-colors">
                            Ler mais →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentIndex
                  ? "bg-orange-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para grupo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
