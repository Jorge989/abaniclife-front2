import React, { useState } from "react";
import FotoCreme from "../assets/Produtoladoesquerdo.png";

const sectionsData = [
  {
    id: "rhodophytas",
    title: "Rhodophytas - Algas vermelhas",
    intro: `O oceano cobre mais de 70% da superfície do planeta, abriga uma biodiversidade rica e complexa. Muitos organismos marinhos evoluíram sob condições extremas — como salinidade elevada, variações de pH, radiação intensa e baixa disponibilidade de nutrientes — desenvolvendo mecanismos de defesa altamente eficientes. Esses mecanismos resultam na produção de metabólitos com potencial para uso terapêutico e cosmético, incluindo ação antioxidante, imunomoduladora e fotoprotetora (Hwang et al., 2018). 

Entre esses organismos, destaca-se a macroalga vermelha Furcellaria lumbricalis f. aegagrophila, pertencente ao filo das Rhodophytas. Encontrada na Europa, do norte da Noruega ao Golfo da Biscaia, incluindo as Ilhas Faroé e o Mar Báltico, mais específicamente na Baía de Kassari na Estônia (Kotta et al., 2003). Sua composição bioquímica diversa é fonte promissora de ativos multifuncionais para a pele (Rayment, 2008). O ativo utilizado no RHODY SENCE FPS50 é o extrato das Rhodophytas hidrolisado. `,
    items: [
      {
        id: "rhodophytas1",
        title: "Ativos da Furcellaria lumbricalis",
        text: `Diversos compostos já foram identificados em algas vermelhas do filo Rhodophyta, como a Furcellaria lumbricalis, e vêm sendo amplamente estudados por seu potencial de aplicação cosmética, especialmente na proteção da pele contra agressões externas. `,
      },
      {
        id: "rhodophytas2",
        title: "Polissacarídeos sulfatados — Carragena",
        text: `De acordo com ensaio técnico-clínico in vitro disponibilizado pelo fabricante, feitos com explantes humanos demonstraram que o ativo extraído da Rhodophytas e utilizado no RODY SENCE FPS50 aumenta em até 124% a síntese de ácido hialurônico, um componente fundamental para o preenchimento e hidratação profunda da pele. Isso contribui para a melhora da textura, elasticidade e viço cutâneo.   `,
      },
      {
        id: "rhodophytas3",
        title: "Ativação mitocondrial e síntese de ATP",
        text: `O ativo demonstrou aumentar em até 276% a produção de ATP (molécula de energia celular) nas mitocôndrias (estrutura celular responsável pela respiração e energia celular), estimulando o metabolismo celular e promovendo a vitalidade da pele. A melhora na respiração celular está diretamente associada à regeneração dos tecidos, principalmente em peles fatigadas e com sinais de envelhecimento. `,
      },
      {
        id: "rhodophytas4",
        title: "Reforço da barreira cutânea",
        text: `Um estudo in vivo realizado pelo detentor do ativo utilizado no RHODY SENCE FPS50 apresentou a pele 99% visivelmente mais hidratada. A expressão de proteínas estruturais (como exemplo +61% de catenina alfa-1, +69% de loricrina e 86% calmodulina like protein 5) foi significativamente aumentada, promovendo maior coesão entre os queratinócitos e fortalecendo a função de barreira da pele, essencial para evitar a desidratação de agressões externas.`,
      },
      {
        id: "rhodophytas5",
        title: "Atividade antimicrobiana e regenerativa",
        text: `Polissacarídeos de algas vermelhas também demonstraram efeito contra microrganismos da microbiota cutânea, além de potencial de regeneração tecidual por meio da ativação de fibroblastos e estimulação da cicatrização (Alves et al., 2022).`,
      },
      {
        id: "rhodophytas6",
        title: "Composos bioativos adicionais presentes em Rhodophytas",
        text: `Além das carragenas diversas espécies de algas vermelhas do filo Rhodophyta são conhecidas por sintetizar compostos fotoprotetores como os aminoácidos semelhantes à micosporina (MAAs) e os polifenóis marinhos, que contribuem para a proteção contra radiação UV, o equilíbrio oxidativo e a integridade cutânea (Hwang et al., 2018; Conde et al., 2021). 

MAAs atuam como filtros solares naturais, absorvendo radiação ultravioleta (UV) entre 310 e 360 nm, com excelente estabilidade e baixa toxicidade. São particularmente abundantes em macroalgas que vivem em zonas expostas à luz solar intensa (Conde et al., 2021). `,
      },
      {
        id: "rhodophytas7",
        title:
          "Equilíbrio oxidativo e controle de espécies reativas de oxigênio (ROS) ",
        text: `O envelhecimento cutâneo é impulsionado por fatores intrínsecos (como genética e alterações hormonais) e extrínsecos, como exposição à radiação UV, poluição e hábitos de vida.  Tanto os raios solares UVA quanto os raios solares UVB  desempenham papel central na aceleração do envelhecimento da pele, promovendo estresse oxidativo e inflamação crônica. 

UVA penetra profundamente na derme, estimulando a formação de espécies reativas de oxigênio (ROS), que degradam fibras de colágeno e elastina, favorecendo o surgimento de rugas e flacidez. 

UVB atua nas camadas mais superficiais da pele, induzindo danos diretos ao DNA celular, contribuindo para hiperpigmentações, inflamações e até alterações cancerígenas (Berthon et al., 2017). 

A radiação solar ativa vias de sinalização que estimulam a produção excessiva de espécies reativas de oxigênio (ROS), desencadeando inflamação, degradação da matriz extracelular e perda da integridade da barreira cutânea. Compostos presentes em algas vermelhas, como catalase, superóxido dismutase e carragenas, são conhecidos por atuar como agentes antioxidantes naturais, ajudando a restaurar o equilíbrio celular mesmo sob condições de estresse ambiental (Berthon et al., 2017; Hwang et al., 2018).  

A Furcellaria lumbricalis, alga vermelha da qual é derivado o ativo, contém carragenas sulfatadas, que auxiliam na preservação da matriz extracelular por meio da inibição de processos inflamatórios e da neutralização de ROS — dois gatilhos centrais na degradação do colágeno (Hwang et al., 2018). 

Adicionalmente, estudos demonstram que compostos bioativos derivados de Rhodophytas, como polifenóis e polissacarídeos, podem modular a atividade de enzimas como as metaloproteinases de matriz (MMPs), responsáveis por fragmentar o colágeno e elastina da pele. A superexpressão dessas enzimas é estimulada por fatores como radiação UV e poluição atmosférica, e sua regulação representa um mecanismo-chave de ação antienvelhecimento (Baptista et al., 2023; Hwang et al., 2018). 

O extrato padronizado de Furcellaria lumbricalis demonstrou ação antioxidante significativa em testes in vitro, sugerindo potencial para proteger a pele contra os danos induzidos por poluentes e radiação UV, reforçando as defesas cutâneas naturais. 

 `,
      },
      {
        id: "rhodophytas8",
        title: "Composos bioativos adicionais presentes em Rhodophytas",
        text: `Além das carragenas diversas espécies de algas vermelhas do filo Rhodophyta são conhecidas por sintetizar compostos fotoprotetores como os aminoácidos semelhantes à micosporina (MAAs) e os polifenóis marinhos, que contribuem para a proteção contra radiação UV, o equilíbrio oxidativo e a integridade cutânea (Hwang et al., 2018; Conde et al., 2021). 

MAAs atuam como filtros solares naturais, absorvendo radiação ultravioleta (UV) entre 310 e 360 nm, com excelente estabilidade e baixa toxicidade. São particularmente abundantes em macroalgas que vivem em zonas expostas à luz solar intensa (Conde et al., 2021). `,
      },
    ],
  },
  {
    id: "bellis",
    title: "Bellis perennis – Margarida",
    intro:
      "Também conhecida comumente como margarida — é uma planta herbácea perene da família Asteraceae, típica de campos, gramados e pastagens. Nativa da Europa Ocidental, Central e do Norte, também é encontrada como espécie invasora em regiões da América do Norte (Tutin et al., 1976; Panda, 2004).  O ativo utilizado no RHODY SENCE FPS50 é um extrato padronizado obtido das flores orgânicas de Bellis perennis, certificado por órgãos como ECOCERT, NATRUE e COSMOS para uso em cosméticos naturais. Seu mecanismo de ação é amplo: atua simultaneamente na expressão e atividade da tirosinase (enzima responsável pela produção de melanina na pele), na ligação da α-MSH  (hormônio estimulante de melanócitos) ao receptor MC-1, na síntese de melanossomos e no processo de endocitose (mecanismo de incorporação celular) — etapas essenciais da melanogênese. Estudos in vitro do ativo demonstraram reduções significativas na expressão de tirosinase em até 89,9%, na atividade da enzima até 49,8% e na formação de melanina redução de até 74,1%. ",
    items: [
      {
        id: "bellis1",
        title: "Clareamento e uniformização do tom da pele",
        text: "A busca por uniformidade no tom da pele vai além da estética: está associada à percepção de vitalidade, saúde e luminosidade. Nesse contexto, ativos botânicos com ação despigmentante vêm ganhando espaço, especialmente aqueles que oferecem eficácia com segurança e naturalidade. O extrato de Bellis perennis é um desses ativos — rico em compostos bioativos que modulam múltiplas vias envolvidas na formação da melanina. ",
      },
      {
        id: "bellis2",
        title: "Atuação sobre manchas e hiperpigmentações",
        text: "Estudos clínicos realizado pelo detentor do ativo que foi utlizado na formulação do RHODY SENCE FPS50, com aplicação tópica de formulações contendo 2% e 5%, por 28 dias, demonstrou clareamento visível da pele e redução da intensidade de manchas senis, especialmente na região do dorso das mãos em voluntários entre 50 e 60 anos. Houve também manutenção dos efeitos após cessação do uso, sugerindo uma ação profunda e duradoura. ",
      },
      {
        id: "bellis3",
        title: "Ação regenerativa",
        text: "Além da atividade despigmentante, frações de Bellis perennis demonstraram ação cicatrizante em modelo animal. Em um estudo realizado in vivo, a aplicação tópica do extrato acelerou a regeneração de feridas por excisão circular, promovendo aumento na proliferação celular, formação de tecido de granulação e reepitelização da pele (processo de cicatrização). Esses efeitos são atribuídos à presença de compostos fenólicos (moléculas vegetais com propriedades antioxidantes que ajudam a neutralizar os radicais livres), flavonoides (subclasse dos compostos fenólicos com ação antioxidante, anti-inflamatória e fotoprotetora) e taninos (polifenóis vegetais com efeito adstringente e anti-inflamatório) com propriedades anti-inflamatórias e antioxidantes (Aydin et al., 2020). ",
      },
    ],
  },
  {
    id: "evodea",
    title: "Evodia rutaecarpa — Rutaceae",
    intro:
      "Originária da medicina tradicional oriental, a planta Evodia rutaecarpa (Wu-Zhu-Yu) é cultivada principalmente na província de Jiangxi, na China. Pertencente da família Rutaceae, essa planta é um arbusto ornamental que chega a crescer uns 10 mestros. O composto que está presente no RHODY SENCE FPS50 é o extrato padronizado obtido da fruta quase madura da planta e desenvolvido para estimular a microcirculação e devolver radiância e vitalidade à pele opaca ou sensibilizada. Seu extrato é rico em alcaloides (compostos nitrogenados bioativos derivados de plantas) indólicos bioativos, como evodiamina, rutaecarpina e dehidroevodiamina, além de conter flavonoides (compostos de fenóis) e ácidos graxos (molécula lipídica) (Tian et al., 2019; Chen et al., 2012; Jiang et al. 2009). ",
    items: [
      {
        id: "evodea1",
        title: "Estímulo à microcirculação e melhora da radiância ",
        text: "Com o avanço da idade e a exposição contínua a fatores ambientais, a microcirculação dérmica sofre redução, comprometendo o aporte de oxigênio e nutrientes às células da pele e com consequencia sua tonalidade e textura. Estudos in vitro do fabricante do ativo utlizado no RHODY SENCE FPS50 age aumentando a produção de óxido nítrico (NO) em 111%. O óxido nítrico é um importante mediador da vasodilatação, favorecendo a circulação dérmica e o aporte de nutrientes. Também foram coduzidos ensaios clínicos  onde foi  aplicado 1% e 3% de do ativo em uso tópico e observou-se: Aumento da luminosidade e radiância cutânea em até 96%; Redução significativa da opacidade vermelhidão e poros dilatados em 85%; Melhora da homogeneidade do tom da pele e suavização da textura superficial em 96%. ",
      },
      {
        id: "evodea2",
        title: "Proteção antipoluição e ação anti-inflamatória",
        text: "A exposição à poluição do ar, especialmente à fração de partículas finas, está associada à disfunção da barreira cutânea, alteração do microbioma da pele, estresse oxidativo e inflamações persistentes, promovendo envelhecimento precoce, hipersensibilidade e doenças inflamatórias da pele. Foi demonstrado que a exposição da pele a poluíção do ar altera aspectos de sensibilidade como, dilatação dos poros, vermelhidão, opacidade e aparencia de não saudável. O teste clínico realizado pelo detentor do ativo, onde foi  utilizado  por 28 dias resultou na percepção dos voluntários de 85% menos sensibilidade da pele, 89% a pele mais hidratada e 100% do aumento da macies da pele. Esses efeitos são atribuídos à presença dos alcaloides evodiamina e rutaecarpina, compostos que possuem atividades antioxidantes e anti-inflamatórias bem documentadas em literatura científica (Forman, 2021; Gu et al., 2020) ",
      },
      {
        id: "evodea3",
        title: "Perfis bioativos e efeitos farmacológicos adicionais",
        text: "Evodiamina, principal alcaloide da planta, exibe ação vasodilatadora endotélio-dependente, além de propriedades antitumorais, anti-inflamatórias, cardioprotetoras e neuroprotetoras. Atua por mecanismos como inibição da proliferação celular, bloqueio do ciclo celular, indução de apoptose e modulação de vias redox-sensíveis (Jiang et al. 2009; Tian et al., 2019). Rutaecarpina, outro alcaloide de destaque, apresenta efeitos cardiovasculares positivos — como ação inotrópica e cronotrópica, proteção contra lesão isquêmica, manutenção do metabolismo lipídico e glicêmico, além da modulação de eventos moleculares da aterosclerose. Seus efeitos são mediados principalmente por ativação dos receptores TRPV1 (Receptor sensorial envolvido na modulação da inflamação e termorregulação. Pode ser ativado por compostos como rutaecarpina, favorecendo efeitos calmantes e vasculares) e liberação de peptídeo (molécula de aminoácidos curta) relacionado ao gene da calcitonina (regulação dos níveis de cálcio no sangue-CGRP) (Jiang et al. 2009; Tianet al., 2019). ",
      },
    ],
  },
];

const Explore = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleSection = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white min-h-screen py-12 mt-25">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header com foto + textos */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
          <div className="flex-1 flex justify-center">
            <img
              src={FotoCreme}
              alt="Produto prateado"
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              SAIBA MAIS SOBRE ATIVOS E BENEFÍCIOS
            </h1>

            <p className="text-gray-700 mb-6">
              Conheça em detalhes os ativos naturais que compõem os produtos...
            </p>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">SUMÁRIO</h3>
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
        <div className="space-y-12 text-center">
          {sectionsData.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="text-left max-w-2xl mx-auto scroll-mt-32"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {section.title}
              </h2>

              <p className="text-gray-700 mb-4 text-justify">{section.intro}</p>

              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="border-t border-b py-3 inline-block w-full max-w-2xl"
                >
                  <button
                    className="flex items-center justify-between w-full text-left font-medium text-gray-800"
                    onClick={() => toggleSection(item.id)}
                  >
                    <span>
                      {openItemId === item.id ? "- " : "+ "} {item.title}
                    </span>
                  </button>

                  {openItemId === item.id && (
                    <div className="mt-2 text-gray-700 text-justify">
                      <p>{item.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
