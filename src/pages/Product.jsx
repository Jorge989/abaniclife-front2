import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Belides from "../assets/cardsAtivos/Belides.png";
import Calendula from "../assets/cardsAtivos/Calendula.png";
import Rhodophyta from "../assets/cardsAtivos/Rhodophyta.png";
import Esqualano from "../assets/cardsAtivos/Esqualano.png";
import Gatuline from "../assets/cardsAtivos/Gatuline.png";
import Jojoba from "../assets/cardsAtivos/Jojoba.png";
import AtivosTeste2 from "../assets/cardsAtivos/Ativos.png";
import AtivosMobile from "../assets/cardsAtivos/AtivosMobile.png";
import BelidesItem from "../assets/itemsAtivos/AtivoBelides.png";
import CalendulaItem from "../assets/itemsAtivos/AtivoCalendula.png";
import EsqualanoItem from "../assets/itemsAtivos/AtivoEsqualano.png";
import EvodiaItem from "../assets/itemsAtivos/AtivoEvodia.png";
import JojobaItem from "../assets/itemsAtivos/AtivoJojoba.png";
import RhodophytaItem from "../assets/itemsAtivos/AtivoRodhophyta.png";

const ativosInfo = [
  {
    name: "RHODYSSEY",
    subtitle: "ANTI OXIDANTE",
    desktop: { top: "2%", left: "2.2%", width: "33%", height: "86%" },
    mobile: { top: "0%", left: "0.5%", width: "49%", height: "42%" },
    descricao: [
      "<p> A macroalga vermelha Furcellaria lumbricalis, pertencente ao filo das Rhodophytas, é encontrada na Europa, no Mar Báltico — especialmente na Baía de Kassari, na Estônia. Possui bioativos com potencial cosmético.</p>",
    ],
    beneficios: [
      "<p>Foi demonstrado que ativo utilizado no <b>RHODY SENCE FPS50</b> aumenta em até <b>124% a sintese de ácido hialurônico.</b> Além de demonstrar. <b>ação antioxidante</b> e potencial proteção a pele contra os danos induzidos por poluentes e radiação UV, reforçando as defesas cutâneas. Além de aumentar significativamente a expressão de proteínas estruturais<b>fortalecendo a função de barreira da pele,</b> essencial para evitar a desidratação causada por agressões externas. O ativo também demonstrou aumentar em até <b>276% a produção de energia celular</b> promovendo a <b>vitalidade da pele.</b></p>",
    ],
    image: Rhodophyta,
  },
  {
    name: "BELIDES",
    subtitle: "ANTI PIGMENTAÇÂO",
    desktop: { top: "2.2%", left: "37%", width: "22.8%", height: "86%" },
    mobile: { top: "0%", left: "51%", width: "49%", height: "42%" },
    descricao: [
      "<p>Conhecido popularmente como margarida, é uma planta originária da Europa. Estudos demonstraram que seu uso regular contribui para a <b>uniformização do tom da pele</b> tornando-o um ativo de destaque em formulações <b>clareadoras e iluminadoras.</b></p>",
    ],
    beneficios: [
      "<p>Atuando na redução da sintese de melanina por múltiplos mecanismos, incluindo a inibição da atividade da tirosinase em até <b>31,4%</b> redução em até <b>76%</b> endotelina, bem como a modulação do receptor MC-1 ema té <b>89,9%</b></p>",
    ],
    image: Belides,
  },
  {
    name: "EVODIA RUTAECARPA RUTACEAE",
    subtitle: "LUMINOSIDADE",
    desktop: { top: "1%", left: "61%", width: "18%", height: "36.5%" },
    mobile: { top: "41%", left: "0.5%", width: "49%", height: "29%" },
    descricao: [
      "<p>A planta Evodia rutaecarpa (Wu-Zhu-Yu) é cultivada principalmente na província de Jiangxi, na China e pertence da familía Rutaceae. O dossiê técnico realizado pelo dentor do ativo obtido da fruta e utilizado no <b>RHODY SENCE FPS50</b> demonstrou em seus resultados:</p>",
    ],
    beneficios: [
      "<p>Aumento na <b>iluminosidade</b> e <b>radiância</b> cutânea em até <b>96%</b> Reduz significativa da opacidade, vermelhidão e poros dilatados em <b>85%</b> Além da melhora na homogeneidade do tom da pele em <b>96%.</b> Os voluntários apresentaram <b>85%</b> menos sensibilidade da pele, <b>89%</b> a pele mais <b>hidratada e 100% do aumento da macies</b> da pele.</p>",
    ],
    image: Gatuline,
  },
  {
    name: "ESQUALANO",
    desktop: { top: "1%", left: "80%", width: "18%", height: "36.5%" },
    mobile: { top: "41%", left: "51%", width: "49%", height: "29%" },
    descricao: [
      "<p>O esqualano derivado do esqualeno composto triterpênico que representa cerca de <b>13%</b> da composição lipídica cutânea. É frequentemente de <b>origem vegetal</b> obtida de fontes como óleo de oliva, óleo de palma, óleo de gérmen de trigo, óleo de amaranto e óleo de farelo de arroz. Oferece múltiplos benefícicios:</p>",
    ],
    beneficios: [
      "<p>Forma um <b>filme protetor</b> que reduz a perda de água e mantém <b>maciez, elasticidade e hidratação.</b> Sua estrutura é semelhante aos lipídios naturais, com a boa absorção e tolerância, até mesmo em peles sensíveis ou acneicas. <b>Combate radicais lives</b> e ajuda a prevenir danos e envelhecimento precoce.</p>",
    ],
    image: Esqualano,
  },
  {
    name: "CALÊNDULA CALENDUA OFFICINALIS",
    subtitle: "REGENERAÇÃO",
    desktop: { top: "49%", left: "61%", width: "17.8%", height: "40%" },
    mobile: { top: "71%", left: "0%", width: "49%", height: "29%" },
    descricao: [
      "<p>É uma planta herbácea originária da região mediterrânea, é amplamente cultivada em climas temperados e utilizada há séculos na cosmtelogia. Suas flores concentram compostos biotivos como flavonoides, triterpenos, carotenoides e sapopinas, responsáveis por sua ação dermatológica.</p>",
    ],
    beneficios: [
      "<p>Estimula fibroblastos e a <b>síntese de colágeno,</b> acelera a epitelização e a <b>reparação e regenração</b> tecidual, Inibe mediadores inflamatórios e alivia irritações cutâneas, sendo <b>eficaz em processos inflamatórios</b>leves. <b>Neutraliza radicais livres,</b> ajudando a prevenir o envelhecimento precoce e o estresse oxidativo cutâneo. Reduz vermelhidão e desconfortos, sendo útil em <b>peles sensíveis</b> ou fragilizadas.</p>",
    ],
    image: Calendula,
  },
  {
    name: "ÓLEO DE JOJOBA SIMMONDSIA CHINENSIS",
    subtitle: "EQUILÍBRIO DA OLESIDADE",
    desktop: { top: "49%", left: "80%", width: "18.2%", height: "40%" },
    mobile: { top: "71%", left: "51%", width: "49%", height: "29%" },
    descricao: [
      "<p>O óleo de jojoba é, na verdade uma cera líquida extraída das sementes da Simmondsia chinensis, um arbusto nativo de regiões áridas do sudeste dos Estados Unidos e norte do México. Possuí alta compatibilidade com todos os tipos de pele.</p>",
    ],
    beneficios: [
      "<p>Forma uma <b>película protetora</b> que reduz a perda de água, mantendo a pele <b>hidratada</b> sem obstruir os poros, Ajuda a <b> equilibrar </b>a produção de sebo, sendo indicado tanto para peles secas quanto oleosas, Contém tocoferóis naturais que <b> combatem radicais livres </b> e auxiliam na prevenção do envelhecimento precoce. Fortalaece a função protetora da pele, ajudando na recuperação de áreas <b>sensibilizadas.</b></p>",
    ],
    image: Jojoba,
  },
];

const PrincipiosAtivos = () => {
  const [ativoSelecionado, setAtivoSelecionado] = useState(null);
  const painelRef = useRef(null);
  const location = useLocation();

  const itemsAtivos = [
    { id: 1, src: BelidesItem, alt: "Belides" },
    { id: 2, src: CalendulaItem, alt: "Calêndula" },
    { id: 3, src: EsqualanoItem, alt: "Esqualano" },
    { id: 4, src: EvodiaItem, alt: "Evodia" },
    { id: 5, src: JojobaItem, alt: "Jojoba" },
    { id: 6, src: RhodophytaItem, alt: "Rhodophyta" },
  ];

  // Scroll suave para hash na URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const yOffset = -165;
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
        const yOffset = isMobile ? -77 : -110; // menor deslocamento no mobile

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
      className="max-w-[1290px] mx-auto px-4 mb-10 relative transition-all mt-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight font-space-grotesk-h1 text-center mb-10">
        Princípios Ativos
      </h1>
      {/* --- Animação de dica no topo --- */}
      <div
        className="
    absolute
    top-2
    left-1/2 md:left-10
    w-[90%] md:w-auto
    -translate-x-1/2 md:translate-x-0
    flex items-center justify-center md:justify-start
    cursor-pointer
    mt-12 md:mt-2
  "
      >
        <div className="animate-fade-in-down flex flex-row items-center gap-2 bg-[#ff5722]/90 text-white px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
          <span className="text-xl animate-bounce">👆</span>
          <span className="text-xs md:text-sm font-semibold">
            Clique nos ativos
          </span>
        </div>
      </div>
      <div className="relative w-[100%] h-[100%] mt-20 md:mt-0">
        {/* Imagem principal */}
        <div className="flex w-full justify-center px-4">
          <picture className="flex justify-center w-full ">
            <source srcSet={AtivosMobile} media="(max-width: 767px)" />
            <img
              src={AtivosTeste2}
              alt="Ativos Rhodysence"
              className="
    w-[112%] max-w-none 
    md:w-[104%] lg:w-[100%]    /* 🔥 iPad (entre 768 e 1024px) */
    xl:w-full                 /* desktops grandes */
    h-auto object-contain rounded-t-lg rounded-b-none 
    transition-transform duration-300
  "
            />
          </picture>
          {/* Botões interativos posicionados sobre a imagem */}
          {ativosInfo.map(({ name, desktop, mobile }) => {
            const isMobile = window.innerWidth < 768;
            const { top, left, width, height } = isMobile ? mobile : desktop;

            return (
              <button
                key={name}
                onClick={() => setAtivoSelecionado(name)}
                style={{
                  top,
                  left,
                  width,
                  height,
                }}
                className="absolute cursor-pointer rounded-lg transition transform hover:scale-105 hover:ring-4 hover:ring-[#ff5722] animate-pulse"
                title={name}
                aria-label={`Selecionar princípio ativo ${name}`}
              />
            );
          })}
        </div>
      </div>

      {/* Painel de conteúdo detalhado abaixo da imagem */}
      {ativoSelecionado && (
        <div
          ref={painelRef}
          className="shadow-lg rounded-b-md max-w-[1224px] mx-auto border border-gray-200 overflow-hidden bg-[#F1F0EB]"
          aria-live="polite"
          role="region"
          aria-labelledby="ativo-titulo"
        >
          {/* Cabeçalho do card */}
          <div className="px-4 sm:px-6 py-4 border-b border-gray-300">
            <div className="flex justify-between items-start gap-4">
              {/* Título e Subtítulo - Agora ocupa mais espaço */}
              <div className="flex-1 min-w-0">
                {" "}
                {/* min-w-0 permite que o texto quebre */}
                <div className="flex justify-between items-start mb-1">
                  <h1 className="text-[28px] md:text-[36px] font-bold text-gray-800 mb-4 leading-tight font-space-grotesk-h1">
                    {ativoSelecionado}
                  </h1>

                  {/* Botão de fechar - agora dentro do fluxo do título */}
                  <button
                    onClick={() => {
                      setAtivoSelecionado(null);
                      setTimeout(() => {
                        const section = document.getElementById("ativos");
                        if (section) {
                          const y =
                            section.getBoundingClientRect().top +
                            window.pageYOffset -
                            0;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }, 100);
                    }}
                    className="text-[#ff5722] hover:text-[#e64a19] text-2xl md:text-2xl font-bold cursor-pointer focus:outline-none transition-colors duration-200 flex-shrink-0 mt-1"
                    aria-label="Fechar painel de princípio ativo"
                  >
                    &times;
                  </button>
                </div>
                <h3 className="text-[20px] md:text-[23px] font-bold text-[#FF5C26] mb-3 font-space-grotesk-h3">
                  {
                    ativosInfo.find((a) => a.name === ativoSelecionado)
                      ?.subtitle
                  }
                </h3>
              </div>
            </div>
          </div>

          {/* Conteúdo do card */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Descrição */}
            <div className="mb-6 flex items-start">
              <span className="w-3 h-3 bg-[#ff5722] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <h3 className="text-lg font-bold text-black mb-3 font-space-grotesk-h3">
                Descrição
              </h3>
            </div>
            <div className="space-y-4 text-gray-700">
              {ativosInfo
                .find((a) => a.name === ativoSelecionado)
                ?.descricao.map((texto, i) => (
                  <p
                    key={i}
                    className="text-gray-700 mb-4 text-justify"
                    dangerouslySetInnerHTML={{ __html: texto }}
                  />
                ))}
            </div>

            {/* Linha divisória */}
            <div className="my-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>

            {/* Benefícios */}
            <div className="mt-6 flex items-start">
              <span className="w-3 h-3 bg-[#ff5722] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <h3 className="text-lg font-bold text-black mb-3 font-space-grotesk-h3">
                Benefícios
              </h3>
            </div>
            <div className="space-y-4 text-gray-700">
              {ativosInfo
                .find((a) => a.name === ativoSelecionado)
                ?.beneficios.map((texto, i) => (
                  <p
                    key={i}
                    className="text-gray-700 mb-4 text-justify"
                    dangerouslySetInnerHTML={{ __html: texto }}
                  />
                ))}
            </div>

            {/* Label com background */}
            <div className="mt-8 pt-6 border-t border-gray-300">
              <div className="flex items-center justify-center">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-[#ff5722] border border-orange-200">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Princípio Ativo
                </span>
              </div>
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
      <section className="w-full bg-[#F1F0EB] py-12 px-4 mt-[8%]">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-12">
          {/* Imagem do Produto */}
          <div className="flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src="https://abaniclife.com/wp-content/uploads/2025/06/Produto-RHODY-SENCE-FPS50.png"
              alt="Hidratante FPS50"
              className="w-full max-w-[300px] md:max-w-[440px] h-auto object-contain rounded-lg"
            />
          </div>

          {/* Conteúdo do Produto */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-space-grotesk-h1">
              Hidratante com FPS50
            </h1>

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

            <div className="w-full max-w-[320px] mt-6">
              <button
                className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white text-sm font-semibold rounded-md py-3 transition duration-300 transform hover:scale-105"
                aria-label="Comprar agora"
              >
                Comprar agora
              </button>
            </div>
          </div>
        </div>
      </section>

      <PrincipiosAtivos />
    </div>
  );
};

export default ProductPage;
