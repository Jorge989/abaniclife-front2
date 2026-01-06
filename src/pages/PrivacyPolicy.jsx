import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-gradient-to-b from-abanic-gray-light to-white mt-20">
      {/* Hero Header */}
      <div className="w-full px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="max-w-6xl text-center">
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-space-grotesk-h1"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            Política de Privacidade
          </h1>
          <p className="text-base text-abanic-gray leading-relaxed">
            A ABANIC LIFE está comprometida com a proteção da sua privacidade e
            dos seus dados pessoais.
          </p>
          <p className="text-sm text-gray-500 mt-6 mb-6">
            Última atualização: Dezembro de 2025
          </p>
          <div className="w-full max-w-[1070px] h-px bg-abanic-orange mx-auto"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1070px] mx-auto px-6 py-16 md:py-24">
        {/* 1. Introdução */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            1. Introdução
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            A ABANIC LIFE está comprometida com a proteção da sua privacidade e
            dos seus dados pessoais. Esta Política de Privacidade descreve como
            coletamos, usamos, armazenamos e protegemos suas informações, em
            conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº
            13.709/2018).
          </p>
        </div>

        {/* 2. Dados que Coletamos */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            2. Dados que Coletamos
          </h2>
          <p className="text-base text-abanic-gray mb-4 leading-relaxed">
            Podemos coletar as seguintes categorias de dados pessoais:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            2.1 Dados de Identificação
          </h3>
          <ul className="list-disc pl-6 text-abanic-gray mb-4">
            <li>Nome completo</li>
            <li>CPF</li>
            <li>Data de nascimento</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            2.2 Dados de Endereço
          </h3>
          <ul className="list-disc pl-6 text-abanic-gray mb-4">
            <li>Endereço residencial ou comercial</li>
            <li>CEP</li>
            <li>Cidade e Estado</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            2.3 Dados de Navegação
          </h3>
          <ul className="list-disc pl-6 text-abanic-gray">
            <li>Endereço IP</li>
            <li>Tipo de navegador</li>
            <li>Páginas visitadas</li>
            <li>Tempo de permanência no site</li>
            <li>Origem do acesso</li>
          </ul>
        </div>

        {/* 3. Como Utilizamos seus Dados */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            3. Como Utilizamos seus Dados
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Utilizamos seus dados pessoais para as seguintes finalidades:
          </p>

          <ul className="space-y-3 mt-4">
            {[
              "Processar e entregar seus pedidos",
              "Enviar atualizações sobre o status do pedido",
              "Fornecer atendimento ao cliente",
              "Enviar comunicações de marketing (com seu consentimento)",
              "Personalizar sua experiência de navegação",
              "Melhorar nossos produtos e serviços",
              "Cumprir obrigações legais e regulatórias",
              "Prevenir fraudes e garantir a segurança",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="inline-block w-2 h-2 rounded-full bg-abanic-orange mt-2 flex-shrink-0" />
                <span className="text-base text-abanic-gray">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Base Legal */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            4. Base Legal para Tratamento
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            O tratamento dos seus dados pessoais é realizado com base nas
            seguintes hipóteses legais previstas na LGPD:
          </p>
          <ul className="list-disc pl-6 text-abanic-gray mt-4">
            <li>Execução de contrato: para processar pedidos e entregas</li>
            <li>Consentimento: para envio de comunicações de marketing</li>
            <li>
              Legítimo interesse: para melhorar nossos serviços e prevenir
              fraudes
            </li>
            <li>
              Cumprimento de obrigação legal: para atender exigências fiscais e
              regulatórias
            </li>
          </ul>
        </div>

        {/* 5. Compartilhamento de Dados */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            5. Compartilhamento de Dados
          </h2>
          <p className="text-base text-abanic-gray mb-4 leading-relaxed">
            Podemos compartilhar seus dados pessoais com:
          </p>
          <ul className="list-disc pl-6 text-abanic-gray">
            <li>Parceiros de logística: para entrega dos produtos</li>
            <li>Processadores de pagamento: para processar transações</li>
            <li>
              Prestadores de serviços: que nos auxiliam na operação do site
            </li>
            <li>Autoridades competentes: quando exigido por lei</li>
          </ul>
          <p className="text-base text-abanic-gray mt-4">
            Não vendemos ou alugamos seus dados pessoais a terceiros.
          </p>
        </div>

        {/* 6. Seus Direitos */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            6. Seus Direitos
          </h2>
          <p className="text-base text-abanic-gray mb-4 leading-relaxed">
            De acordo com a LGPD, você tem os seguintes direitos:
          </p>
          <ul className="list-disc pl-6 text-abanic-gray">
            <li>Confirmação: saber se tratamos seus dados</li>
            <li>Acesso: solicitar cópia dos seus dados</li>
            <li>Correção: atualizar dados incompletos ou incorretos</li>
            <li>Anonimização: tornar dados anônimos quando aplicável</li>
            <li>Eliminação: solicitar a exclusão de dados desnecessários</li>
            <li>Portabilidade: transferir dados para outro fornecedor</li>
            <li>Revogação: retirar o consentimento a qualquer momento</li>
          </ul>
          <p className="text-base text-abanic-gray mt-4">
            Para exercer seus direitos, entre em contato através do e-mail:{" "}
            <a
              href="mailto:privacidade@abaniclife.com"
              className="font-semibold"
              style={{ color: "#fc622b" }}
            >
              privacidade@abaniclife.com
            </a>
          </p>
        </div>

        {/* 7. Segurança dos Dados */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            7. Segurança dos Dados
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Implementamos medidas técnicas e organizacionais apropriadas para
            proteger seus dados pessoais contra acesso não autorizado, perda,
            alteração ou divulgação:
          </p>
          <ul className="list-disc pl-6 text-abanic-gray mt-4">
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controle de acesso restrito</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Treinamento de colaboradores</li>
          </ul>
        </div>

        {/* 8. Retenção de Dados */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            8. Retenção de Dados
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Mantemos seus dados pessoais apenas pelo tempo necessário para
            cumprir as finalidades descritas nesta política, ou conforme exigido
            por lei. Após esse período, os dados são eliminados ou anonimizados
            de forma segura.
          </p>
        </div>

        {/* 9. Transferência Internacional */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            9. Transferência Internacional
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Seus dados podem ser transferidos e armazenados em servidores
            localizados fora do Brasil. Nesses casos, garantimos que a
            transferência seja realizada em conformidade com a LGPD e que
            medidas de proteção adequadas sejam aplicadas.
          </p>
        </div>

        {/* 10. Alterações nesta Política */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            10. Alterações nesta Política
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Esta Política de Privacidade pode ser atualizada periodicamente.
            Recomendamos que você revise esta página regularmente. Alterações
            significativas serão comunicadas através do nosso site ou por
            e-mail.
          </p>
        </div>

        {/* 11. Contato do Encarregado (DPO) */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-space-grotesk-h1">
            11. Contato do Encarregado (DPO)
          </h2>
          <p className="text-base text-abanic-gray leading-relaxed">
            Para questões relacionadas à privacidade e proteção de dados, entre
            em contato com nosso Encarregado de Proteção de Dados:
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl" style={{ color: "#fc622b" }}>
              ✉
            </span>
            <a
              href="mailto:dpo@abaniclife.com"
              className="font-semibold text-lg transition-colors"
              style={{ color: "#fc622b" }}
            >
              dpo@abaniclife.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
