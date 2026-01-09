import React, { useState } from "react";
import { motion } from "framer-motion";
import FotoCreme from "../assets/Produtoladoesquerdo.png";
import rhodophytas from "../assets/explore/rhodophytas.jpeg";
import bellis from "../assets/explore/belis.jpg";
import evodia from "../assets/explore/evodia.jpg";

const sectionsData = [
  {
    id: "rhodophytas",
    title: "Rhodophytas - Algas vermelhas",
    image: rhodophytas,
    intro: [
      "<p>Muitos organismos marinhos evoluíram sob condições extremas — como salinidade elevada, variações de pH, radiação intensa e baixa disponibilidade de nutrientes — desenvolvendo mecanismos de defesa altamente eficientes. Esses mecanismos resultam na produção de metabólitos com potencial para uso terapêutico e cosmético, incluindo ação antioxidante, imunomoduladora e fotoprotetora (Hwang et al., 2018).<br><br> Entre esses organismos, destacam-se as macroalgas vermelhas pertencentes ao filo das Rhodophytas. Encontradas no Mar Báltico, ao norte da Noruega, mais especificamente na Baía de Kassari na Estônia (Kotta et al., 2003). Sua composição bioquímica diversa é fonte promissora de ativos multifuncionais para a pele (Rayment, 2008). O ativo utilizado na linha <b>RHODY SENCE</b> é o extrato das Rhodophytas hidrolisado. ",
    ],
    items: [
      {
        id: "rhodophytas1",
        title: "Ativos das Algas Vermelhas",
        text: [
          "<p>Diversos compostos já foram identificados em algas vermelhas do filo Rhodophyta, como a <em>Furcellaria lumbricalis</em>, e vêm sendo amplamente estudados por seu potencial de aplicação cosmética, especialmente na proteção da pele contra agressões externas. </p>",
        ],
      },

      {
        id: "rhodophytas2",
        title: "Estímulo à síntese de ácido hialurônico",
        text: [
          "<p>De acordo com ensaio técnico-clínico <em>in vitro</em> disponibilizado pelo fabricante, feitos com explantes humanos demonstraram que o ativo extraído da Rhodophytas e utilizado na linha <b>RHODY SENCE</b> aumenta em até <b>124%</b> a síntese de ácido hialurônico, um componente fundamental para o preenchimento e hidratação profunda da pele. Isso contribui para a melhora da textura, elasticidade e viço cutâneo.</p>",
        ],
      },

      {
        id: "rhodophytas3",
        title: "Ativação mitocondrial e síntese de ATP",
        text: [
          "<p>O ativo demonstrou aumentar em até <b>276%</b> a produção de ATP (molécula de energia celular) nas mitocôndrias (estrutura celular responsável pela respiração e energia celular), estimulando o metabolismo celular e promovendo a vitalidade da pele. A melhora na respiração celular está diretamente associada à regeneração dos tecidos, principalmente em peles fatigadas e com sinais de envelhecimento.</p>",
        ],
      },
      {
        id: "rhodophytas4",
        title: "Reforço da barreira cutânea",
        text: [
          "<p>Um estudo <em>in vivo</em> realizado com o ativo utilizado na linha <b>RHODY SENCE</b> apresentou a pele <b>99%</b> visivelmente mais hidratada. A expressão de proteínas estruturais (como exemplo +61% de catenina alfa-1, +69% de loricrina e 86% calmodulina like protein 5) foi significativamente aumentada, promovendo maior coesão entre os queratinócitos e fortalecendo a função de barreira da pele, essencial para evitar a desidratação de agressões externas. </p>",
        ],
      },
      {
        id: "rhodophytas6",
        title: "Polissacarídeos sulfatados — Carragena",
        text: [
          "<p>As carragenas são polissacarídeos sulfatados (macromoléculas de açúcares e grupo sulfato) que possuem ação hidratante, calmante, antioxidante e derivam de algas vermelhas. Com propriedades filmógenas, formam uma barreira sobre a pele que reduz a perda de água e melhora a hidratação. Testes demonstram que carragenas do tipo híbrido kappa/beta, presentes no extrato de <em>Furcellaria lumbricalis</em>, promovem efeitos protetores contra a apoptose induzida por UVB (morte celular), além de atuarem na regulação da resposta inflamatória por meio da expressão da enzima Ciclooxigenase-2 (COX-2), envolvida na regeneração celular (Hwang et al., 2018; Tripp et al., 2003). </p>",
        ],
      },
      {
        id: "rhodophytas7",
        title: "Compostos bioativos adicionais presentes em Rhodophytas",
        text: [
          "<p>Além das carragenas diversas espécies de algas vermelhas do filo Rhodophyta são conhecidas por sintetizar compostos fotoprotetores como os aminoácidos semelhantes à micosporina (MAAs) e os polifenóis marinhos, que contribuem para a proteção contra radiação UV, o equilíbrio oxidativo e a integridade cutânea (Hwang et al., 2018; Conde et al., 2021). MAAs atuam como filtros solares naturais, absorvendo radiação ultravioleta (UV) entre 310 e 360 nm, com excelente estabilidade e baixa toxicidade. São particularmente abundantes em macroalgas que vivem em zonas expostas à luz solar intensa (Conde et al., 2021). </p>",
        ],
      },
      {
        id: "rhodophytas8",
        title:
          "Equilíbrio oxidativo e controle de espécies reativas de oxigênio (ROS)",
        text: [
          "<p>O envelhecimento cutâneo é impulsionado por fatores intrínsecos (como genética e alterações hormonais) e extrínsecos, como exposição à radiação UV, poluição e hábitos de vida.  Tanto os raios solares UVA quanto os raios solares UVB  desempenham papel central na aceleração do envelhecimento da pele, promovendo estresse oxidativo e inflamação crônica. A radiação solar ativa vias de sinalização que estimulam a produção excessiva de espécies reativas de oxigênio (ROS), desencadeando inflamação, degradação da matriz extracelular e perda da integridade da barreira cutânea. Compostos presentes em algas vermelhas, como catalase, superóxido dismutase e carragenas, são conhecidos por atuar como agentes antioxidantes naturais, ajudando a restaurar o equilíbrio celular mesmo sob condições de estresse ambiental (Berthon et al., 2017; Hwang et al., 2018). A <em>Furcellaria lumbricalis</em>, alga vermelha da qual é derivado o ativo, contém carragenas sulfatadas, que auxiliam na preservação da matriz extracelular por meio da inibição de processos inflamatórios e da neutralização de ROS — dois gatilhos centrais na degradação do colágeno (Hwang et al., 2018). Adicionalmente, estudos demonstram que compostos bioativos derivados de Rhodophytas, como polifenóis e polissacarídeos, podem modular a atividade de enzimas como as metaloproteinases de matriz (MMPs), responsáveis por fragmentar o colágeno e elastina da pele. A superexpressão dessas enzimas é estimulada por fatores como radiação UV e poluição atmosférica, e sua regulação representa um mecanismo-chave de ação antienvelhecimento (Baptista et al., 2023; Hwang et al., 2018). O extrato padronizado de <em>Furcellaria lumbricalis</em> demonstrou ação antioxidante significativa em testes in vitro, sugerindo potencial para proteger a pele contra os danos induzidos por poluentes e radiação UV, reforçando as defesas cutâneas naturais. </p>",
        ],
      },
      {
        id: "rhodophytas_referencias",
        title: "Referências",
        text: [
          `

    <p>BAPTISTA, E. G. <em>et al.</em> Marine bioactives against skin aging: the role of seaweed-derived polyphenols and polysaccharides in modulating MMPs and oxidative stress. <em>Marine Biotechnology</em>, v. 25, n. 1, p. 50–64, 2023.<br><br></p>

    <p>BERTHON, J. Y. <em>et al.</em> Marine algae as attractive source to skin care. <em>Free Radical Research</em>, v. 51, n. 6, p. 555–567, 2017.<br><br></p>

    <p>CODIF RECHERCHE & NATURE. <em>Ficha técnica: Rhodyssey™ PA – Furcellaria lumbricalis standardized extract.</em> França, 2023. Documento interno do fabricante.<br><br></p>

    <p>CONDE, E. <em>et al.</em> Mycosporine-like amino acids from red macroalgae: a natural sunscreen perspective. <em>Marine Drugs</em>, v. 19, n. 7, p. 364, 2021.<br><br></p>

    <p>HWANG, E. <em>et al.</em> Photoprotective substances derived from marine algae. <em>Marine Drugs</em>, v. 16, n. 10, p. 399, 2018.<br><br></p>

    <p>KOTTA, J. <em>et al.</em> Macroalgae of the Kassari Bay (Baltic Sea). <em>Proceedings of the Estonian Academy of Sciences</em>, v. 52, p. 217–223, 2003.<br><br></p>

    <p>RAYMENT, W. J. <em>Furcellaria lumbricalis</em> (Clawed fork weed). In: TYLER-WALTERS, H.; HISCOCK, K. (ed.). <em>Marine Life Information Network: Biology and Sensitivity Key Information Reviews</em> [online]. Plymouth: Marine Biological Association of the United Kingdom, 2008. Disponível em: &lt;https://www.marlin.ac.uk/species/detail/1616&gt;. Acesso em: 4 ago. 2025.<br><br></p>

    <p>TRIPP, C. S. <em>et al.</em> Suppression of UVB-induced COX-2 expression by anti-inflammatory agents in SKH-1 mice. <em>Photochemistry and Photobiology</em>, v. 77, n. 3, p. 339–346, 2003.<br><br></p>

    <p>FIGURA 1: © fotoman-kharkov/Getty Image. Acessado em agosto de 2025. Disponível em: https://peapix.com/bing/39853.<br><br></p>`,
        ],
      },
    ],
  },
  {
    id: "bellis",
    title: "Bellis perennis – Margarida",
    image: bellis,
    intro: [
      "<p>Também conhecida como margarida — é uma planta da família Asteraceae, típica de campos. Nativa da Europa Ocidental, Central e do Norte. (Tutin et al., 1976; Panda, 2004).<br><br> O ativo utilizado na linha <b>RHODY SENCE</b> é um extrato obtido das flores orgânicas de <em>Bellis perennis</em>, certificado por órgãos como ECOCERT, NATRUE e COSMOS para uso em cosméticos naturais. Seu mecanismo de ação é amplo: atua simultaneamente na expressão e atividade da tirosinase (enzima responsável pela produção de melanina na pele), na ligação da α-MSH  (hormônio estimulante de melanócitos) ao receptor MC-1, na síntese de melanossomos e no processo de endocitose (mecanismo de incorporação celular) — etapas essenciais da melanogênese. Estudos in vitro do ativo demonstraram reduções significativas na expressão de tirosinase em até <b>89,9%</b>, na atividade da enzima até <b>49,8%</b> e na formação de melanina redução de até <b>74,1%</b>. </p>",
    ],
    items: [
      {
        id: "bellis1",
        title: "Clareamento e uniformização do tom da pele",
        text: [
          "<p>A busca por uniformidade no tom da pele vai além da estética: está associada à percepção de vitalidade, saúde e luminosidade. Nesse contexto, ativos botânicos com ação despigmentante vêm ganhando espaço, especialmente aqueles que oferecem eficácia com segurança e naturalidade. O extrato de <em>Bellis perennis</em> é um desses ativos — rico em compostos bioativos que modulam múltiplas vias envolvidas na formação da melanina. </p>",
        ],
      },
      {
        id: "bellis2",
        title: "Atuação sobre manchas e hiperpigmentações",
        text: [
          "<p>Estudos clínicos realizado pelo detentor do ativo que foi utlizado na formulação da linha <b>RHODY SENCE</b>, com aplicação tópica de formulações contendo 2% e 5%, por 28 dias, demonstrou clareamento visível da pele e redução da intensidade de manchas senis, especialmente na região do dorso das mãos em voluntários entre 50 e 60 anos. Houve também manutenção dos efeitos após cessação do uso, sugerindo uma ação profunda e duradoura.</p>",
        ],
      },
      {
        id: "bellis3",
        title: "Ação regenerativa",
        text: [
          "<p>Em um estudo realizado <em>in vivo</em>, a aplicação tópica do extrato demonstrou aumento na proliferação celular, formação de tecido de granulação e reepitelização da pele (processo de cicatrização). Esses efeitos são atribuídos à presença de compostos fenólicos (moléculas vegetais com propriedades antioxidantes que ajudam a neutralizar os radicais livres), flavonoides (subclasse dos compostos fenólicos com ação antioxidante, anti-inflamatória e fotoprotetora) e taninos (polifenóis vegetais com efeito adstringente e anti-inflamatório) com propriedades anti-inflamatórias e antioxidantes. </p>",
        ],
      },
      {
        id: "bellis_referencias",
        title: "Referências",
        text: [
          `
    <p>KARAKAŞ, F. P. et al. The evaluation of topical administration of <em>Bellis perennis</em> fraction on circular excision wound healing in Wistar albino rats. <em>Pharmaceutical Biology</em>, v. 50, n. 8, p. 1031-1037, 2012.<br><br></p>

    <p>CLR – CHEMISCHES LABORATORIUM DR. KURT RICHTER GMBH. <em>Belides™ ORG: The natural way of skin lightening.</em> Berlin, 2020. Documento interno do fabricante.<br><br></p>

    <p>PANDA, H. <em>Herbs cultivation and medicinal uses.</em> New Delhi: Asia Pacific Business Press, 2004.<br><br></p>

    <p>TUTIN, T. G. et al. <em>Flora Europaea.</em> v. 4: Plantaginaceae to Compositae (and Rubiaceae). Cambridge: Cambridge University Press, 1976.<br><br></p>`,
        ],
      },
    ],
  },
  {
    id: "evodea",
    title: "Evodia rutaecarpa — Rutaceae",
    image: evodia,
    intro: [
      "<p>Originária da medicina tradicional oriental, a planta  <em>Evodia rutaecarpa </em> (Wu-Zhu-Yu) é cultivada principalmente na província de Jiangxi, na China. Pertencente da família Rutaceae, O composto que está presente na linha <b>RHODY SENCE</b> é o extrato padronizado obtido da fruta quase madura da planta e desenvolvido para estimular a microcirculação e devolver radiância e vitalidade à pele opaca ou sensibilizada.   <br><br>Seu extrato é rico em alcaloides (compostos nitrogenados bioativos derivados de plantas) indólicos bioativos, como evodiamina, rutaecarpina e dehidroevodiamina, além de conter flavonoides (compostos de fenóis) e ácidos graxos (molécula lipídica) (Tian et al., 2019; Chen et al., 2012; Jiang et al. 2009). </p>",
    ],
    items: [
      {
        id: "evodea1",
        title: "Estímulo à microcirculação e melhora da radiância",
        text: [
          "<p>Com o avanço da idade e a exposição contínua a fatores ambientais, a microcirculação dérmica sofre redução, comprometendo o aporte de oxigênio e nutrientes às células da pele e com consequencia sua tonalidade e textura. Estudos <em>in vitro</em> do fabricante do ativo utilizado na linha <b>RHODY SENCE</b> demonstraram aumento na produção de óxido nítrico (NO) em <b>111%</b>. O óxido nítrico é um importante mediador da vasodilatação, favorecendo a circulação dérmica e o aporte de nutrientes. <br><br>Também foram conduzidos ensaios clínicos onde foi aplicado 1% e 3% do ativo em uso tópico e observou-se:</p>",
          "<ul style='list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem;'>" +
            "<li>Aumento da luminosidade e radiância cutânea em até <b>96%</b>;</li>" +
            "<li>Redução significativa da opacidade, vermelhidão e poros dilatados em <b>85%</b>;</li>" +
            "<li>Melhora da homogeneidade do tom da pele e suavização da textura superficial em <b>96%</b>.</li>" +
            "</ul>",
        ],
      },
      {
        id: "evodea2",
        title: "Proteção antipoluição e ação anti-inflamatória",
        text: [
          "<p>A exposição à poluição do ar, especialmente à fração de partículas finas, está associada à disfunção da barreira cutânea, alteração do micro bioma da pele, estresse oxidativo e inflamações persistentes, promovendo envelhecimento precoce, hipersensibilidade e doenças inflamatórias da pele. <br><br>Foi demonstrado que a exposição da pele a poluícion do ar altera aspectos de sensibilidade como, dilatação dos poros, vermelhidão, opacidade e aparencia de não saudável. O teste clínico realizado com o ativo da linha <b>RHODY SENCE</b>, onde foi  utilizado  por 28 dias resultou na percepção dos voluntários de <b>85%</b> menos sensibilidade da pele, <b>89%</b> a pele mais hidratada e <b>100%</b> do aumento da macies da pele. <br><br>Esses efeitos são atribuídos à presença dos alcaloides evodiamina e rutaecarpina, compostos que possuem atividades antioxidantes e anti-inflamatórias bem documentadas em literatura científica (Forman, 2021; Gu et al., 2020) </p>",
        ],
      },
      {
        id: "evodea3",
        title: "Perfis bioativos e efeitos farmacológicos adicionais",
        text: [
          "<p>Evodiamina, principal alcaloide da planta, exibe ação vasodilatadora endotélio-dependente, além de propriedades antitumorais, anti-inflamatórias, cardioprotetoras e neuroprotetoras. Atua por mecanismos como inibição da proliferação celular, bloqueio do ciclo celular, indução de apoptose e modulação de vias redox-sensíveis (Jiang et al. 2009; Tian et al., 2019). Rutaecarpina, outro alcaloide de destaque, seus efeitos são mediados principalmente por ativação dos receptores TRPV1 (Receptor sensorial envolvido na modulação da inflamação e termorregulação. Pode ser ativado por compostos como rutaecarpina, favorecendo efeitos calmantes e vasculares) e liberação de peptídeo (molécula de aminoácidos curta) relacionado ao gene da calcitonina (regulação dos níveis de cálcio no sangue-CGRP) (Jiang et al. 2009; Tianet al., 2019). </p>",
        ],
      },
      {
        id: "evodea_referencias",
        title: "Referências",
        text: [
          `
    <p>CHEN, F. et al. Transdermal behaviors comparisons among <em>Evodia rutaecarpa</em> extracts and major alkaloids by in vitro and in vivo methods. <em>Fitoterapia</em>, v. 83, n. 4, p. 706-713, 2012.</p></br>

    <p>FORMAN, H. J.; ZHANG, H. Targeting oxidative stress in disease: promise and limitations of antioxidant therapy. <em>Nature Reviews Drug Discovery</em>, v. 20, p. 689-709, 2021.</p></br>

    <p>JIANG, J.; HU, C-P. Evodiamine: a novel anti-cancer alkaloid from <em>Evodia rutaecarpa</em>. <em>Molecules</em>, v. 14, n. 5, p. 1852–1859, 2009.</p></br>

    <p>ROBERTET. <em>Gatuline® Radiance – Technical Dossier</em>. Grasse: Robertet Group, 2017. Documento interno do fabricante.</p></br>

    <p>TIAN, K.; LI, J.; XU, S. Rutaecarpine: a promising cardiovascular protective alkaloid from <em>Evodia rutaecarpa</em> (Wu Zhu Yu). <em>Pharmacological Research</em>, v. 141, p. 541–550, 2019.</p></br>

    <p>WANG, C. et al. Rutaecarpine: a promising cardiovascular protective alkaloid from <em>Evodia rutaecarpa</em>. <em>Phytochemistry Reviews</em>, v. 19, p. 971-985, 2020.</p></br>

    <p>ZHOU, Y. et al. Air pollution and skin aging: molecular mechanisms and clinical perspectives. <em>Journal of Dermatological Science</em>, v. 104, n. 2, p. 78-85, 2021.</p></br>

    <p>PEAKVISOR. Jiangxi – China. [Imagem]. Disponível em: <a href="https://peakvisor.com/adm/jiangxi.html" target="_blank" class="text-blue-600 hover:underline">https://peakvisor.com/adm/jiangxi.html</a>. Acesso em: 08 ago. 2025.</p></br>`,
        ],
      },
    ],
  },
];

const Explore = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleSection = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  // ---------- VARIANTS (igual BrandAndFounders) ----------
  const imageVariants = (reverse) => ({
    hidden: { opacity: 0, x: reverse ? 150 : -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  });

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  return (
    <section
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: "#F1F0EB" }}
    >
      <div className="max-w-[1070px] mx-auto px-6 py-10 mt-28 space-y-20">
        {/* Header com foto + textos */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
          <div className="flex-1 flex justify-center">
            {/* --- imagem do header com motion (apenas envolvida) --- */}
            <motion.div
              variants={imageVariants(false)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-md"
            >
              <img
                src={FotoCreme}
                alt="Produto prateado"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-space-grotesk-h1">
              SAIBA MAIS SOBRE ATIVOS E BENEFÍCIOS
            </h1>

            <p className="text-gray-700 mb-6">
              A linha RHODY SENCE foi desenvolvida com ativos naturais e
              selecionados com base em seus benefícios. Conheça abaixo os
              principais ativos de nossas formulações e sua ações.
            </p>

            <div>
              <h3 className="text-lg font-bold text-black mb-3 font-space-grotesk-h3">
                SUMÁRIO
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-black">
                {sectionsData.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="hover:underline">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Seções detalhadas */}
        <div className="space-y-12 text-left">
          {sectionsData.map((section, idx) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-space-grotesk-h3">
                {section.title}
              </h2>

              {/* Renderiza intro como string ou array */}
              {Array.isArray(section.intro) ? (
                section.intro.map((texto, i) => (
                  <React.Fragment key={i}>
                    {/* Texto animado */}
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.35 }}
                      className="text-gray-700 mb-4 text-justify"
                      dangerouslySetInnerHTML={{ __html: texto }}
                    />

                    {/* Imagem animada */}
                    <motion.div
                      variants={imageVariants(false)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.35 }}
                      className="w-full h-72 md:h-80 lg:h-[420px] overflow-hidden rounded-xl"
                    >
                      <img
                        src={section.image}
                        alt="foto ativo"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </motion.div>
                  </React.Fragment>
                ))
              ) : (
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  className="text-gray-700 mb-4 text-justify"
                  dangerouslySetInnerHTML={{ __html: section.intro }}
                />
              )}

              {section.items.map((item) => (
                <div key={item.id} className="border-t border-b py-3 w-full">
                  <button
                    className="flex items-center justify-between w-full text-left font-medium text-gray-800"
                    onClick={() => toggleSection(item.id)}
                  >
                    <span>
                      {openItemId === item.id ? "- " : "+ "} {item.title}
                    </span>
                  </button>

                  {openItemId === item.id && (
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.35 }}
                      className="mt-2 text-gray-700 text-justify space-y-3 leading-[2]"
                    >
                      {item.text.map((t, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ __html: t }} />
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
