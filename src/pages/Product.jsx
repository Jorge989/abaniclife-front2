import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Ativos from "../assets/Ativos.png";
import Produto from "../assets/produto.png";
import Belides from "../assets/cardsAtivos/Belides.png";
import Calendula from "../assets/cardsAtivos/Calendula.png";
import Rhodophyta from "../assets/cardsAtivos/Rhodophyta.png";
import Esqualano from "../assets/cardsAtivos/Esqualano.png";
import Gatuline from "../assets/cardsAtivos/Gatuline.png";
const ativosInfo = [
  {
    name: "RHODYSSEY",
    top: "20%",
    left: "43%",
    descricao:
      "Rhodyssey é um extrato marinho obtido da Evodia rutaecarpa, tradicionalmente cultivada em regiões do sudoeste asiático. Rico em flavonoides e compostos bioativos, é conhecido por promover uma sensação de conforto na pele, além de estimular a microcirculação cutânea. Seu uso em cosméticos está relacionado ao aumento da luminosidade e **uniformização do tom da pele**, combatendo sinais de fadiga. É indicado especialmente para peles opacas, **clareadoras** e **iluminadoras**.",
    beneficios:
      "Atuando na redução da sintese de melanina por múltiplos mecanismos, incluindo a inibição da atividade da tirosinase em até 31,4%, redução em até 76% endotelina, bem como a modulação do receptor MC-1 em até 89,9%",
    image: Rhodophyta,
  },
  {
    name: "BELIDES",
    subtitle: "ANTI PIGMENTAÇÂO",
    top: "20%",
    left: "63%",
    descricao:
      "Conhecido popularmente como margarida, é uma planta originária da Europa. Estudos demonstraram que seu uso regular contribui para a uniformização do tom da pele tornando-o um ativo de destaque em formulações clareadores e iluminadoras.",
    beneficios:
      "Atuando na redução da sintese de melanina por múltiplos mecanismos, incluindo a inibição da atividade da tirosinase em até 31,4%, redução em até 76% endotelina, bem como a modulação do receptor MC-1 em até 89,9%",
    image: Belides,
  },
  {
    name: "GATULINE RADIESS",
    top: "20%",
    left: "82%",
    descricao:
      "Derivado da flor Asteraceae, estimula a microcirculação e proporciona efeito tensor imediato, suavizando linhas de expressão.",
    beneficios:
      "Proporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidante Proporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidante.Proporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidanteProporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidante Proporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidante.Proporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidante.Proporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidante Proporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidante.Proporciona efeito lifting imediato, suaviza linhas finas e melhora a firmeza da pele com ação antioxidante.",
    image: Gatuline,
  },
  {
    name: "ESQUALANO",
    top: "62%",
    left: "43%",
    descricao:
      "Ingrediente biomimético derivado da cana-de-açúcar, hidrata profundamente, restaura a barreira da pele e é altamente compatível com a pele humana.",
    beneficios:
      "Hidratação profunda sem obstruir os poros. Restaura a barreira cutânea e melhora a elasticidade da pele, mantendo a suavidade natural.Hidratação profunda sem obstruir os poros. Restaura a barreira cutânea e melhora a elasticidade da pele, mantendo a suavidade naturalHidratação profunda sem obstruir os poros. Restaura a barreira cutânea e melhora a elasticidade da pele, mantendo a suavidade natural",
    image: Esqualano,
  },
  {
    name: "CALÊNDULA",
    top: "62%",
    left: "63%",
    descricao:
      "Conhecida por suas propriedades calmantes e anti-inflamatórias, ideal para peles sensíveis ou com vermelhidão.",
    beneficios:
      "Reduz inflamações, acalma a pele sensibilizada e ajuda a prevenir vermelhidão e irritações.Reduz inflamações, acalma a pele sensibilizada e ajuda a prevenir vermelhidão e irritações.Reduz inflamações, acalma a pele sensibilizada e ajuda a prevenir vermelhidão e irritações.",
    image: Calendula,
  },
  {
    name: "JOJOBA",
    top: "62%",
    left: "82%",
    descricao:
      "Óleo vegetal com composição semelhante ao sebo humano, regula a oleosidade, hidrata sem obstruir poros e é rico em antioxidantes.",
    beneficios:
      "Regula a oleosidade, hidrata profundamente e protege a pele contra danos ambientais graças aos seus antioxidantes naturais.Regula a oleosidade, hidrata profundamente e protege a pele contra danos ambientais graças aos seus antioxidantes naturais.Regula a oleosidade, hidrata profundamente e protege a pele contra danos ambientais graças aos seus antioxidantes naturais.Regula a oleosidade, hidrata profundamente e protege a pele contra danos ambientais graças aos seus antioxidantes naturais.",
    image: Produto,
  },
];

const PrincipiosAtivos = () => {
  const [ativoSelecionado, setAtivoSelecionado] = useState(null);
  const painelRef = useRef(null);
  const location = useLocation();

  // Scroll suave para hash na URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const yOffset = -165; // ajuste conforme altura do header fixo
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (ativoSelecionado && painelRef.current) {
      setTimeout(() => {
        // Detecta largura da tela
        const isMobile = window.innerWidth < 768; // breakpoint mobile
        const yOffset = isMobile ? -80 : -120; // menor deslocamento no mobile

        const elementPosition =
          painelRef.current.getBoundingClientRect().top + window.pageYOffset;
        const y = elementPosition + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }, [ativoSelecionado]);

  return (
    <section
      id="ativos"
      className="max-w-[1250px] mx-auto px-4 mb-10 relative transition-all mt-10"
    >
      <h1 className="text-center text-4xl font-light text-[#494949] mb-10">
        Princípios Ativos
      </h1>

      <div className="relative w-full">
        <img
          src={Ativos}
          alt="Princípios ativos"
          className="w-full h-full rounded-xl object-contain"
        />

        {/* Botões interativos posicionados sobre a imagem, usando top/left do array */}
        {ativosInfo.map(({ name, top, left }) => (
          <button
            key={name}
            onClick={() => setAtivoSelecionado(name)}
            style={{ top: top, left: left }}
            className="absolute w-[13%] h-[22%] cursor-pointer rounded-lg transition hover:bg-opacity-40  "
            title={name}
            aria-label={`Selecionar princípio ativo ${name}`}
          />
        ))}
      </div>

      {/* Painel de conteúdo detalhado abaixo da imagem */}
      {ativoSelecionado && (
        <div
          ref={painelRef}
          className="shadow-lg rounded-b-md max-w-[1240px] mx-auto flex flex-col md:flex-row overflow-hidden"
          aria-live="polite"
          role="region"
          aria-labelledby="ativo-titulo"
        >
          {/* Coluna da Imagem */}

          <div
            className="flex-1 relative w-full aspect-[12/9] overflow-hidden"
            style={{
              backgroundImage: `url(${
                ativosInfo.find((a) => a.name === ativoSelecionado)?.image
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Linha Laranja Divisória */}
          <div className="w-1 bg-[#ff5722]" />

          {/* Coluna do Texto */}
          <div className="flex-1 p-4 md:p-6 text-gray-800 relative bg-[#F1F0EB]">
            {/* Botão de fechar */}
            <button
              onClick={() => setAtivoSelecionado(null)}
              className="absolute top-2 right-2 text-[#ff5722] hover:text-[#e64a19] text-xl md:text-2xl font-bold cursor-pointer focus:outline-none z-10"
              aria-label="Fechar painel de princípio ativo"
            >
              &times;
            </button>

            {/* Título */}
            <h2
              id="ativo-titulo"
              className="text-2xl md:text-3xl font-bold italic uppercase mb-3 leading-snug"
            >
              {ativoSelecionado}
            </h2>
            <h3 className="text-[#FF5C26] font-extrabold uppercase tracking-wide text-lg">
              ANTI PIGMENTAÇÃO
            </h3>

            {/* Texto sem scroll */}
            <div className="space-y-3 text-xs md:text-sm leading-relaxed">
              <p className="mt-7 text-lg md:text-1xl text-abanic-gray max-w-3xl mx-auto mb-10">
                {ativosInfo.find((a) => a.name === ativoSelecionado)?.descricao}
              </p>
              <hr className="border-t border-gray-300" />
              <p className="mt-7 text-lg md:text-1xl text-abanic-gray max-w-3xl mx-auto mb-10">
                {
                  ativosInfo.find((a) => a.name === ativoSelecionado)
                    ?.beneficios
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ProductPage = () => {
  return (
    <div style={{ backgroundColor: "#F1F0EB" }}>
      <section
        style={{ backgroundColor: "#F1F0EB" }}
        id="hidratante"
        className=" min-h-screen flex flex-col md:flex-row items-stretch justify-center mt-15 p-3 md:p-19 gap-x-0"
      >
        {/* Imagem do Produto - ocupa 50% com fundo branco e padding */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-0 h-full">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src="https://abaniclife.com/wp-content/uploads/2025/06/Produto-RHODY-SENCE-FPS50.png"
              alt="Hidratante FPS50"
              className="w-full h-[500px] object-cover mt-5 rounded-lg"
            />
          </div>
        </div>

        {/* Conteúdo do Produto */}
        <div className="w-full md:w-1/2 flex flex-col justify-start gap-3 px-4 md:px-8 py-7">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-abanic-gray-dark">
            Hidratante com FPS50
          </h2>

          <p className="text-lg font-semibold text-[#ff5722]">R$00,00</p>

          <div className="text-sm md:text-base text-[#555555] leading-relaxed space-y-1">
            <p>Recomendação de uso</p>
            <p>Textura Hidratante</p>
            <p>Aroma: Neutro</p>
            <p>FPS50 – 50ml</p>
            <p>100% natural. cruelty-free. sem parabenos.</p>
            <p>
              ingredientes: ácido hialurônico, gatuline, beleides, esqualano,
              jojoba, camomila, fps físico.
            </p>
          </div>

          <div className="w-full max-w-[340px] mt-4">
            <label htmlFor="quantidade" className="sr-only">
              Quantidade
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById("quantidade");
                  const value = parseInt(input.value || "0", 10);
                  if (value > 1) input.value = value - 1;
                }}
                className=" cursor-pointer px-3 py-2 text-lg text-gray-600 hover:bg-gray-100"
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <input
                type="number"
                id="quantidade"
                defaultValue={1}
                min={1}
                className="w-full text-center text-sm px-2 py-2 focus:outline-none"
                aria-live="polite"
                aria-atomic="true"
              />
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById("quantidade");
                  const value = parseInt(input.value || "0", 10);
                  input.value = value + 1;
                }}
                className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100"
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
          </div>

          <div className="w-full max-w-[340px] mt-3">
            <button
              className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white text-sm font-semibold rounded-md py-3 transition duration-300"
              aria-label="Comprar agora"
            >
              Comprar agora
            </button>
          </div>
        </div>
      </section>

      <PrincipiosAtivos />
    </div>
  );
};

export default ProductPage;
