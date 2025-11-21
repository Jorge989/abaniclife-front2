import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Banner1 from "../assets/Bannerteste1.jpg";
import Banner3 from "../assets/Banner3.jpg";
import Banner2 from "../assets/Banner2.jpg";
import { trackEvent } from "../utils/analytics";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Explore a Natureza",
      subtitle: "EXPLORE AS POSSIBILIDADES",
      image: Banner1,
      overlay: "bg-black/30",
    },
    {
      id: 2,
      title: "Cultura e Tendência",
      subtitle: "SUAS MULTIPLAS VERSÕES",
      image: Banner3,
      overlay: "bg-black/40",
    },
    {
      id: 3,
      title: "Beleza Natural",
      subtitle: "E DEIXE-SE SURPREENDER",
      image: Banner2,
      overlay: "bg-black/35",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      {/* Estilos específicos para iPad */}
      <style>
        {`
          /* Ajustes específicos para iPad (768px - 1024px) */
          @media (min-width: 768px) and (max-width: 1024px) {
            .ipad-adjustment {
              background-size: cover !important;
              background-position: center center !important;
            }
          }
        `}
      </style>

      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              key={index}
              className="absolute inset-0 h-full w-full bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition:
                  window.innerWidth < 640
                    ? index === 0
                      ? "left 52% top 50px"
                      : index === 1
                      ? "right 53% top 50px"
                      : "center top 75px"
                    : "center top 75px",
              }}
            />

            {/* Overlay */}
            <div className={`absolute inset-0 ${slide.overlay}`} />

            {/* Content */}
            <div className="relative z-10 h-full">
              <div className="absolute bottom-20 left-0 right-0 px-4 max-w-4xl mx-auto text-center text-white">
                <p
                  className="
    text-[40px]          /* 🔥 maior no mobile */
    md:text-[28px]       /* bom em tablets */
    lg:text-[38px]       /* mantém no desktop */
    mb-0 
    opacity-90 
    animate-fade-in-up 
    animation-delay-300 
    font-space-grotesk-h1
  "
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          prevSlide();
          trackEvent({
            name: "click_banner_prev",
            category: "CTA",
            action: "Botão Banner Anterior",
          });
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-12 h-12 transition-smooth"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-12 h-12 transition-smooth"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
