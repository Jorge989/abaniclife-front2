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
import { motion } from "framer-motion";
import ProductActivetext from "../components/ProductActiveText";

const ativosInfo = [
  {
    name: "RHODOPHYTAS",
    subtitle: "ANTI OXIDANTE",
    desktop: { top: "2%", left: "2.2%", width: "33%", height: "86%" },
    mobile: { top: "0%", left: "0.5%", width: "49%", height: "42%" },
    descricao: [
      "<p> A macroalga vermelha <em>Furcellaria lumbricalis</em>, pertencente ao filo das Rhodophytas, é encontrada na Europa, no Mar Báltico — especialmente na Baía de Kassari, na Estônia. Possui bioativos com potencial cosmético.</p>",
    ],
    beneficios: [
      "<p>Foi demonstrado que ativo utilizado na linha <b>RHODY SENCE</b> aumenta em até <b>124% a sintese de ácido hialurônico.</b> Além de demonstrar <b>ação antioxidante</b> e potencial proteção da pele contra os danos induzidos por poluentes e radiação UV, reforçando as defesas cutâneas. Aumenta significativamente a expressão de proteínas estruturais <b>fortalecendo a função de barreira da pele,</b> essencial para evitar a desidratação causada por agressões externas. O ativo demonstrou aumentar em até <b>276% a produção de energia celular</b> promovendo a <b>vitalidade da pele.</b></p>",
    ],
    image: Rhodophyta,
  },
  {
    name: "BELLIS PERENNIS",
    subtitle: "ANTI-PIGMENTAÇÃO",
    desktop: { top: "2.2%", left: "37%", width: "22.8%", height: "86%" },
    mobile: { top: "0%", left: "51%", width: "49%", height: "42%" },
    descricao: [
      "<p>Conhecido popularmente como margarida, é uma planta originária da Europa. Estudos demonstraram que seu uso regular contribui para a <b>uniformização do tom da pele</b> tornando-o um ativo de destaque em formulações <b>clareadoras e iluminadoras.</b></p>",
    ],
    beneficios: [
      "<p>Atuando na redução da síntese da melanina por múltiplos mecanismos, incluindo a inibição da atividade da tirosinase em até <b>31,4%</b> redução em até <b>76%</b> endotelina, bem como a modulação do receptor MC-1 em até <b>89,9%</b></p>",
    ],
    image: Belides,
  },
  {
    name: "EVODIA RUTAECARPA",
    subtitle: "LUMINOSIDADE",
    desktop: { top: "1%", left: "61%", width: "18%", height: "36.5%" },
    mobile: { top: "41%", left: "0.5%", width: "49%", height: "29%" },
    descricao: [
      "<p>A planta Evodia rutaecarpa (Wu-Zhu-Yu) é cultivada principalmente na província de Jiangxi, na China e pertence da familía Rutaceae. O dossiê técnico do ativo obtido da fruta e utilizado na linha <b>RHODY SENCE,</b> demonstrou em seus resultados:</p>",
    ],
    beneficios: [
      "<p>Aumento na <b>iluminosidade</b> e <b>radiância</b> cutânea em até <b>96%</b>. Redução significativa da opacidade, vermelhidão e poros dilatados em <b>85%</b> e da melhora na homogeneidade do tom da pele em <b>96%.</b> Os voluntários apresentaram <b>85%</b> menos sensibilidade da pele, <b>89%</b> a pele mais <b>hidratada e 100% do aumento da macies</b> da pele.</p>",
    ],
    image: Gatuline,
  },
  {
    name: "ESQUALANO VEGETAL",
    desktop: { top: "1%", left: "80%", width: "18%", height: "36.5%" },
    mobile: { top: "41%", left: "51%", width: "49%", height: "29%" },
    descricao: [
      "<p>O esqualano derivado do esqualeno composto triterpênico que representa cerca de <b>13%</b> da composição lipídica cutânea. É frequentemente de <b>origem vegetal</b> obtida de fontes como óleo de oliva, óleo de palma, óleo de gérmen de trigo, óleo de amaranto e óleo de farelo de arroz. Oferece múltiplos benefícicios.</p>",
    ],
    beneficios: [
      "<p>Forma um <b>filme protetor</b> que reduz a perda de água e mantém <b>maciez, elasticidade e hidratação.</b> Sua estrutura é semelhante aos lipídios naturais, com a boa absorção e tolerância, até mesmo em peles sensíveis ou acneicas. <b>Combate radicais lives</b> e ajuda a prevenir danos e envelhecimento precoce.</p>",
    ],
    image: Esqualano,
  },
  {
    name: "CALÊNDULA - CALENDUA OFFICINALIS",
    subtitle: "REGENERAÇÃO",
    desktop: { top: "49%", left: "61%", width: "17.8%", height: "40%" },
    mobile: { top: "71%", left: "0%", width: "49%", height: "29%" },
    descricao: [
      "<p>É uma planta herbácea originária da região mediterrânea, amplamente cultivada em climas temperados e utilizada há séculos na cosmtelogia. Suas flores concentram compostos biotivos como flavonoides, triterpenos, carotenoides e sapopinas, responsáveis por sua ação dermatológica.</p>",
    ],
    beneficios: [
      "<p>Estimula fibroblastos e a <b>síntese de colágeno.</b> Acelera a epitelização, a <b>reparação e a regeneração</b> tecidual. Inibe mediadores inflamatórios e alivia irritações cutâneas, sendo <b>eficaz em processos inflamatórios</b> leves. <b>Neutraliza radicais livres,</b> ajudando a prevenir o envelhecimento precoce e o estresse oxidativo cutâneo. Reduz vermelhidão e desconfortos, sendo útil em <b>peles sensíveis</b> ou fragilizadas.</p>",
    ],
    image: Calendula,
  },
  {
    name: "ÓLEO DE JOJOBA - SIMMONDSIA CHINENSIS",
    subtitle: "EQUILÍBRIO DA OLESIDADE",
    desktop: { top: "49%", left: "80%", width: "18.2%", height: "40%" },
    mobile: { top: "71%", left: "51%", width: "49%", height: "29%" },
    descricao: [
      "<p>O óleo de jojoba é na verdade uma cera líquida extraída das sementes da <em>Simmondsia chinensis</em>, um arbusto nativo de regiões áridas do sudeste dos Estados Unidos e norte do México. Possuí alta compatibilidade com todos os tipos de pele.</p>",
    ],
    beneficios: [
      "<p>Forma uma <b>película protetora</b> que reduz a perda de água, mantendo a pele <b>hidratada</b> sem obstruir os poros. Ajuda a <b> equilibrar </b>a produção de sebo, sendo indicado tanto para peles secas quanto oleosas. Contém tocoferóis naturais que <b> combatem radicais livres </b> e auxiliam na prevenção do envelhecimento precoce. Fortalece a função protetora da pele, ajudando na recuperação de áreas sensibilizadas.</p>",
    ],
    image: Jojoba,
  },
];

const PrincipiosAtivos = () => {
  const [ativoSelecionado, setAtivoSelecionado] = useState(null);
  const painelRef = useRef(null);

  const itemsAtivos = [
    { id: 1, src: BelidesItem, alt: "Belides" },
    { id: 2, src: CalendulaItem, alt: "Calêndula" },
    { id: 3, src: EsqualanoItem, alt: "Esqualano" },
    { id: 4, src: EvodiaItem, alt: "Evodia" },
    { id: 5, src: JojobaItem, alt: "Jojoba" },
    { id: 6, src: RhodophytaItem, alt: "Rhodophyta" },
  ];

  useEffect(() => {
    if (ativoSelecionado && painelRef.current) {
      setTimeout(() => {
        const isMobile = window.innerWidth < 768;
        const yOffset = isMobile ? -77 : -110;

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
      <h1
        className="text-3xl md:text-4xl font-bold leading-tight font-space-grotesk-h1 text-center mb-10"
        style={{ color: "var(--abanic-gray-dark)" }}
      >
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
          <span className="text-xl animate-bounce">👇</span>
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
          className="shadow-md rounded-b-md max-w-[1224px] mx-auto border border-gray-200 overflow-hidden bg-[#F1F0EB]"
          aria-live="polite"
          role="region"
          aria-labelledby="ativo-titulo"
        >
          {/* Cabeçalho */}
          <div className="px-4 sm:px-5 py-3 border-b border-gray-300">
            <div className="flex justify-between items-start gap-3">
              {/* Título */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h1 className="text-[22px] md:text-[28px] font-bold text-gray-800 mb-2 leading-tight font-space-grotesk-h1">
                    {ativoSelecionado}
                  </h1>

                  {/* Fechar */}
                  <button
                    onClick={() => {
                      setAtivoSelecionado(null);
                      setTimeout(() => {
                        const section = document.getElementById("ativos");
                        if (section) {
                          const y =
                            section.getBoundingClientRect().top +
                            window.pageYOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }, 100);
                    }}
                    className="text-[#ff5722] hover:text-[#e64a19] text-xl cursor-pointer transition-colors mt-1"
                    aria-label="Fechar painel"
                  >
                    &times;
                  </button>
                </div>

                <h3 className="text-[16px] md:text-[18px] font-semibold text-[#FF5C26] mb-2 font-space-grotesk-h3">
                  {
                    ativosInfo.find((a) => a.name === ativoSelecionado)
                      ?.subtitle
                  }
                </h3>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-4 sm:p-5 md:p-6">
            {/* Descrição */}
            <div className="mb-4 flex items-start">
              <span className="w-2.5 h-2.5 bg-[#ff5722] rounded-full mt-1.5 mr-2"></span>
              <h3 className="text-md font-bold text-black font-space-grotesk-h3">
                Descrição
              </h3>
            </div>

            <div
              className="space-y-3 text-[17px] leading-relaxed"
              style={{ color: "var(--abanic-gray)" }}
            >
              {ativosInfo
                .find((a) => a.name === ativoSelecionado)
                ?.descricao.map((texto, i) => (
                  <p
                    key={i}
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: texto }}
                  />
                ))}
            </div>

            {/* Linha */}
            <div className="my-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>

            {/* Benefícios */}
            <div className="mt-4 flex items-start">
              <span className="w-2.5 h-2.5 bg-[#ff5722] rounded-full mt-1.5 mr-2"></span>
              <h3 className="text-md font-bold text-black font-space-grotesk-h3">
                Benefícios
              </h3>
            </div>

            <div
              className="space-y-3 text-[17px] leading-relaxed"
              style={{ color: "var(--abanic-gray)" }}
            >
              {ativosInfo
                .find((a) => a.name === ativoSelecionado)
                ?.beneficios.map((texto, i) => (
                  <p
                    key={i}
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: texto }}
                  />
                ))}
            </div>

            {/* Label */}
            <div className="mt-6 pt-4 border-t border-gray-300">
              <div className="flex items-center justify-center">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-orange-100 text-[#ff5722] border border-orange-200">
                  <svg
                    className="w-3.5 h-3.5 mr-1"
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
  const [openUsoOne, setOpenUsoOne] = useState(false);
  const [openIngredientesOne, setOpenIngredientesOne] = useState(false);
  const [openUsoTwo, setOpenUsoTwo] = useState(false);
  const [openIngredientesTwo, setOpenIngredientesTwo] = useState(false);
  const [openUsoThree, setOpenUsoThree] = useState(false);
  const [openIngredientesThree, setOpenIngredientesThree] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll para a seção específica ou primeiro produto
    const scrollToTarget = () => {
      const hash = location.hash;

      // Se não houver hash específico de produto, sempre vai para o primeiro
      if (
        !hash ||
        (hash !== "#gel" &&
          hash !== "#serum" &&
          hash !== "#fps50" &&
          hash !== "#ativos")
      ) {
        const element = document.querySelector("#gel");
        if (element) {
          const y =
            element.getBoundingClientRect().top + window.pageYOffset - 140;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        return;
      }

      // Se tem hash válido, vai para ele
      const element = document.querySelector(hash);
      if (element) {
        // Offset consistente para todos os produtos - alinha no topo com espaço para header
        const yOffset = -140;

        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // Aguarda o DOM estar pronto
    const timer = setTimeout(scrollToTarget, 150);
    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <section style={{ backgroundColor: "#F1F0EB", scrollBehavior: "smooth" }}>
      <motion.div
        key="gel"
        className="max-w-[1070px] mx-auto px-6 py-10 mt-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        id="gel"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Imagem do Produto */}
          <motion.div
            className="w-4/5 md:w-2/5 flex justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1671575192248-5d8e42f18a9c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gel de Limpeza RHODY SENCE"
              className="w-full h-auto max-h-[380px] object-cover rounded-lg shadow-md"
            />
          </motion.div>

          {/* Conteúdo do Produto */}
          <motion.div
            className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start gap-3 text-center md:text-left"
            variants={{
              hidden: { opacity: 0, x: 100 }, // sai da direita
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.3 },
              },
            }}
          >
            <h1 className="text-2xl md:text-3xl mb-0 leading-tight font-space-grotesk-h1">
              <span
                className="font-bold"
                style={{ color: "var(--abanic-gray-dark)" }}
              >
                GEL DE LIMPEZA RHODY SENCE
              </span>
            </h1>

            <div className="flex items-center gap-4 text-base font-semibold text-[#ff5722]">
              <p>R$00,00</p>
              <p>150ml</p>
            </div>

            <div className="text-sm md:text-base leading-relaxed space-y-1 w-full">
              <p
                className="text-[14px] md:text-[15px] text-justify whitespace-pre-line leading-normal rounded-lg items-start mt-1"
                style={{
                  color: "var(--abanic-gray)",
                }}
              >
                Formulação em gel efeito teia. Enriquecido com ativos
                antioxidantes extraídos de algas vermelhas e ativos clareadores.
                {"\n"}
                Sua textura auxilia na remoção de impurezas com delicadeza,
                deixando a pele com sensação hidratante e conforto calmante.
                {"\n"}
                Fragrância hipoalergênica. Possui notas minerais que remetem ao
                frescor da brisa do mar, habitat natural das algas vermelhas.
              </p>
              {/* INDICAÇÃO DE USO */}
              <button
                onClick={() => setOpenUsoOne(!openUsoOne)}
                aria-expanded={openUsoOne}
                className="flex items-center justify-between w-full text-left font-medium text-gray-800 mt-4"
              >
                <span className="text-[17px] md:text-[17px]">
                  {openUsoOne ? "- INDICAÇÃO DE USO" : "+ INDICAÇÃO DE USO"}
                </span>
              </button>

              {openUsoOne && (
                <p
                  className="text-[15px] md:text-[15px] text-justify whitespace-pre-line leading-relaxed rounded-lg items-start mt-1"
                  style={{
                    color: "var(--abanic-gray)",
                  }}
                >
                  Aplique uma porção de dois pumps no rosto e pescoço umedecidos
                  e espalhe de forma homogênea com movimentos leves circulares.
                  Retire o produto com água abundante.
                </p>
              )}

              {/* INGREDIENTES */}
              <button
                onClick={() => setOpenIngredientesOne(!openIngredientesOne)}
                aria-expanded={openIngredientesOne}
                className="flex items-center justify-between w-full text-left font-medium text-gray-800 mt-5"
              >
                <span className="text-[17px] md:text-[17px]">
                  {openIngredientesOne ? "- INGREDIENTES" : "+ INGREDIENTES"}
                </span>
              </button>

              {openIngredientesOne && (
                <p
                  className="text-[15px] md:text-[15px] text-justify whitespace-pre-line leading-relaxed rounded-lg items-start mt-1"
                  style={{
                    color: "var(--abanic-gray)",
                  }}
                >
                  Coloque aqui sua lista de ingredientes, descrição, etc.
                </p>
              )}
            </div>

            <div className="w-full max-w-[320px] mt-4">
              <button className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white text-sm font-semibold rounded-md py-2.5 transition duration-300 transform hover:scale-105">
                Comprar agora
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        key="serum"
        className="max-w-[1070px] mx-auto px-6 py-6 mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        id="serum"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Imagem do Produto */}
          <motion.div
            className="w-4/5 md:w-2/5 flex justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1671575192248-5d8e42f18a9c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sérum Clareador RHODY"
              className="w-full h-auto max-h-[380px] object-cover rounded-lg shadow-md"
            />
          </motion.div>

          {/* Conteúdo do Produto */}
          <motion.div
            className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start gap-3 text-center md:text-left"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.3 },
              },
            }}
          >
            <h1 className="text-2xl md:text-3xl mb-0 leading-tight font-space-grotesk-h1">
              <span
                className="font-bold"
                style={{ color: "var(--abanic-gray-dark)" }}
              >
                SÉRUM CLAREADOR RHODY SENCE
              </span>
            </h1>

            <div className="flex items-center gap-4 text-base font-semibold text-[#ff5722]">
              <p>R$00,00</p>
              <p>30ML</p>
            </div>

            <div className="text-sm md:text-base leading-relaxed space-y-1 w-full">
              <p
                className="text-[14px] md:text-[15px] text-justify whitespace-pre-line leading-normal rounded-lg items-start mt-1"
                style={{
                  color: "var(--abanic-gray)",
                }}
              >
                Formulação leve com ação clareadora.
                {"\n"}
                Possui ativos naturais extraídos de algas vermelhas e flores de
                margaridas, que contribuem para a uniformização do tom da pele.
                Permitem a utilização do produto durante o dia e à noite.
                {"\n"}
                Pele luminosa com aparência homogênea.
                {"\n"}
                Fragrância hipoalergênica. Possui notas minerais que remetem ao
                frescor da brisa do mar, habitat natural das algas vermelhas.
              </p>

              {/* INDICAÇÃO DE USO */}
              <button
                onClick={() => setOpenUsoTwo(!openUsoTwo)}
                aria-expanded={openUsoTwo}
                className="flex items-center justify-between w-full text-left font-medium text-gray-800 mt-4"
              >
                <span className="text-[17px] md:text-[17px]">
                  {openUsoTwo ? "- INDICAÇÃO DE USO" : "+ INDICAÇÃO DE USO"}
                </span>
              </button>

              {openUsoTwo && (
                <p
                  className="text-[15px] md:text-[15px] text-justify whitespace-pre-line leading-relaxed rounded-lg items-start mt-1"
                  style={{
                    color: "var(--abanic-gray)",
                  }}
                >
                  Aplique 3 (três) gotas do produto em todo o rosto e pescoço.
                  Espalhe de forma homogênea, com movimentos leves e circulares,
                  até sentir a total absorção do produto.
                </p>
              )}

              {/* INGREDIENTES */}
              <button
                onClick={() => setOpenIngredientesTwo(!openIngredientesTwo)}
                aria-expanded={openIngredientesTwo}
                className="flex items-center justify-between w-full text-left font-medium text-gray-800 mt-5"
              >
                <span className="text-[17px] md:text-[17px]">
                  {openIngredientesTwo ? "- INGREDIENTES" : "+ INGREDIENTES"}
                </span>
              </button>

              {openIngredientesTwo && (
                <p
                  className="text-[15px] md:text-[15px] text-justify whitespace-pre-line leading-relaxed rounded-lg items-start mt-1"
                  style={{
                    color: "var(--abanic-gray)",
                  }}
                >
                  Coloque aqui sua lista de ingredientes, descrição, etc.
                </p>
              )}
            </div>

            <div className="w-full max-w-[320px] mt-4">
              <button
                className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white text-sm font-semibold rounded-md py-2.5 transition duration-300 transform hover:scale-105"
                aria-label="Comprar agora"
              >
                Comprar agora
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        key="fps50"
        className="max-w-[1070px] mx-auto px-6 py-6 mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        id="fps50"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Imagem do Produto */}
          <motion.div
            className="w-4/5 md:w-2/5 flex justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1671575192248-5d8e42f18a9c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Creme Facial RHODY SENCE FPS50"
              className="w-full h-auto max-h-[380px] object-cover rounded-lg shadow-md"
            />
          </motion.div>

          {/* Conteúdo do Produto */}
          <motion.div
            className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start gap-3 text-center md:text-left"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.3 },
              },
            }}
          >
            <h1 className="text-2xl md:text-3xl mb-0 leading-tight font-space-grotesk-h1">
              <span
                className="font-bold"
                style={{ color: "var(--abanic-gray-dark)" }}
              >
                CREME FACIAL RHODY SENCE FPS50
              </span>
            </h1>

            <div className="flex items-center gap-4 text-base font-semibold text-[#ff5722]">
              <p>R$00,00</p>
              <p>60MG</p>
            </div>

            <div className="text-sm md:text-base leading-relaxed space-y-1 w-full">
              <p
                className="text-[14px] md:text-[15px] text-justify whitespace-pre-line leading-normal rounded-lg items-start mt-1"
                style={{
                  color: "var(--abanic-gray)",
                }}
              >
                Formulação cremosa. Possui ativos naturais extraídos de algas
                vermelhas e flores de margarida, além de ativos hidratantes e
                calmantes, que contribuem para a aparência de uma pele radiante
                e revitalizada.
                {"\n"}
                Toque sedoso e aveludado.
                {"\n"}
                Fragrância hipoalergênica. Possui notas minerais que remetem ao
                frescor da brisa do mar, habitat natural das algas vermelhas.
              </p>

              {/* INDICAÇÃO DE USO */}
              <button
                onClick={() => setOpenUsoThree(!openUsoThree)}
                aria-expanded={openUsoThree}
                className="flex items-center justify-between w-full text-left font-medium text-gray-800 mt-4"
              >
                <span className="text-[17px] md:text-[17px]">
                  {openUsoThree ? "- INDICAÇÃO DE USO" : "+ INDICAÇÃO DE USO"}
                </span>
              </button>

              {openUsoThree && (
                <p
                  className="text-[15px] md:text-[15px] text-justify whitespace-pre-line leading-relaxed rounded-lg items-start mt-1"
                  style={{
                    color: "var(--abanic-gray)",
                  }}
                >
                  Aplique uma gota do produto em cada região do rosto e do
                  pescoço. Espalhe de forma homogênea até sentir a total
                  absorção do produto.
                  {"\n"}
                  Ao se expor ao sol intenso, aplique protetor solar.
                </p>
              )}

              {/* INGREDIENTES */}
              <button
                onClick={() => setOpenIngredientesThree(!openIngredientesThree)}
                aria-expanded={openIngredientesThree}
                className="flex items-center justify-between w-full text-left font-medium text-gray-800 mt-5"
              >
                <span className="text-[17px] md:text-[17px]">
                  {openIngredientesThree ? "- INGREDIENTES" : "+ INGREDIENTES"}
                </span>
              </button>

              {openIngredientesThree && (
                <p
                  className="text-[15px] md:text-[15px] text-justify whitespace-pre-line leading-relaxed rounded-lg items-start mt-1"
                  style={{
                    color: "var(--abanic-gray)",
                  }}
                >
                  Coloque aqui sua lista de ingredientes, descrição, etc.
                </p>
              )}
            </div>

            <div className="w-full max-w-[320px] mt-4">
              <button
                className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white text-sm font-semibold rounded-md py-2.5 transition duration-300 transform hover:scale-105"
                aria-label="Comprar agora"
              >
                Comprar agora
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <ProductActivetext />
      {/* PrincipiosAtivos fica fora do container principal pra herdar background, se desejar igual, envolva com outro container */}
      <div style={{ backgroundColor: "#F1F0EB" }} className="mt-30">
        <PrincipiosAtivos />
      </div>
    </section>
  );
};

export default ProductPage;
