import React from "react";

const TermsOfUse = () => {
  return (
    <section className="w-full bg-gradient-to-b from-abanic-gray-light to-white mt-20">
      {/* Hero Header */}
      <div className="w-full px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="max-w-6xl text-center">
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-space-grotesk-h1"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Termos de Uso
          </h1>
          <p className="text-base text-abanic-gray leading-relaxed">
            Estes Termos de Uso regulam o acesso e a utilização do site da
            ABANIC LIFE.
          </p>
          <p className="text-sm text-gray-500 mt-6 mb-6">
            Última atualização: Dezembro de 2024
          </p>
          <div className="w-full max-w-[1070px] h-px bg-abanic-orange mx-auto"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1070px] mx-auto px-6 py-16 md:py-24 -mt-20">
        {/* 1. Aceitação dos Termos */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            1. Aceitação dos Termos
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Ao acessar e utilizar o site da ABANIC LIFE, você concorda
            integralmente com estes Termos de Uso. Caso não concorde com
            qualquer parte destes termos, recomendamos que não utilize nossos
            serviços.
          </p>
          <p className="text-base text-abanic-gray mt-4 leading-relaxed">
            A ABANIC LIFE reserva-se o direito de modificar estes termos a
            qualquer momento, sendo responsabilidade do usuário verificá-los
            periodicamente.
          </p>
        </div>

        {/* 2. Descrição dos Serviços */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            2. Descrição dos Serviços
          </h2>
          <p className="text-base text-abanic-gray mb-4 leading-relaxed">
            A ABANIC LIFE é uma plataforma dedicada à comercialização de
            produtos de skincare e cuidados pessoais da linha RHODY SENCE.
            Nossos serviços incluem:
          </p>
          <ul className="list-disc pl-6 text-abanic-gray space-y-2">
            <li>Venda de produtos de skincare com ativos naturais</li>
            <li>Informações sobre ingredientes e benefícios dos produtos</li>
            <li>Conteúdo educacional sobre cuidados com a pele</li>
            <li>Atendimento ao cliente e suporte pós-venda</li>
          </ul>
        </div>

        {/* 3. Uso do Site */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            3. Uso do Site
          </h2>
          <p className="text-base text-abanic-gray mb-4 leading-relaxed">
            Você se compromete a utilizar o site de forma ética, legal e
            responsável. Não é permitido:
          </p>
          <ul className="list-disc pl-6 text-abanic-gray space-y-2">
            <li>Reproduzir ou copiar conteúdos sem autorização prévia</li>
            <li>Utilizar o site para fins ilegais ou não autorizados</li>
            <li>Transmitir vírus ou códigos maliciosos</li>
            <li>
              Interferir na integridade ou no desempenho do site e seus sistemas
            </li>
            <li>Coletar informações de outros usuários sem consentimento</li>
          </ul>
        </div>

        {/* 4. Cadastro e Conta */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            4. Cadastro e Conta
          </h2>
          <p className="text-base text-abanic-gray mb-4 leading-relaxed">
            Para realizar compras, pode ser necessário criar uma conta. O
            usuário é responsável por:
          </p>
          <ul className="list-disc pl-6 text-abanic-gray space-y-2">
            <li>Fornecer informações verdadeiras e atualizadas</li>
            <li>Manter a confidencialidade de sua senha</li>
            <li>Notificar qualquer uso não autorizado da conta</li>
            <li>Todas as atividades realizadas sob sua conta</li>
          </ul>
        </div>

        {/* 5. Produtos e Preços */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            5. Produtos e Preços
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Os preços dos produtos podem ser alterados sem aviso prévio. As
            imagens exibidas são ilustrativas e podem variar conforme o
            dispositivo do usuário.
          </p>
          <p className="text-base text-abanic-gray mt-4 leading-relaxed">
            Reservamo-nos o direito de limitar quantidades, cancelar pedidos ou
            recusar vendas conforme critérios internos.
          </p>
        </div>

        {/* 6. Pagamento e Entrega */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            6. Pagamento e Entrega
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Os pagamentos são processados por parceiros seguros. Os prazos de
            entrega são estimativas e podem variar de acordo com a localidade e
            disponibilidade.
          </p>
        </div>

        {/* 7. Propriedade Intelectual */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            7. Propriedade Intelectual
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Todo o conteúdo do site é de propriedade exclusiva da ABANIC LIFE ou
            de seus licenciadores, sendo protegido por leis de direitos autorais
            e propriedade intelectual.
          </p>
        </div>

        {/* 8. Limitação de Responsabilidade */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            8. Limitação de Responsabilidade
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            A ABANIC LIFE não se responsabiliza por danos diretos ou indiretos
            decorrentes do uso ou da impossibilidade de uso do site ou produtos.
          </p>
        </div>

        {/* 9. Lei Aplicável */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            9. Lei Aplicável
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Estes Termos de Uso são regidos pelas leis da República Federativa
            do Brasil, sendo eleito o foro da comarca de São Paulo/SP.
          </p>
        </div>

        {/* 10. Contato */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            10. Contato
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Para dúvidas ou esclarecimentos sobre estes Termos de Uso, entre em
            contato:
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl" style={{ color: "#fc622b" }}>
              ✉
            </span>
            <a
              href="mailto:contato@abaniclife.com"
              className="font-semibold text-lg transition-colors"
              style={{ color: "#fc622b" }}
            >
              contato@abaniclife.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
