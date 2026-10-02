import { Shield, MessageCircle, HelpCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511967450723";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const sections = [
  {
    title: "1. Informações que Coletamos",
    content: [
      "Coletamos informações que você fornece diretamente a nós, como nome, número de telefone, endereço de e-mail e mensagens enviadas através do nosso formulário de contato ou WhatsApp.",
      "Também coletamos automaticamente certas informações sobre o seu dispositivo, incluindo endereço IP, tipo de navegador, páginas visitadas, tempo gasto nas páginas e dados de uso do site, por meio de cookies e tecnologias similares.",
    ],
  },
  {
    title: "2. Como Utilizamos Suas Informações",
    content: [
      "Utilizamos suas informações para responder às suas solicitações de suporte e atendimento, enviar comunicações relacionadas aos nossos serviços, melhorar a experiência do usuário em nosso site e analisar o tráfego e o comportamento dos visitantes.",
      "Também podemos usar suas informações para cumprir obrigações legais, proteger nossos direitos e prevenir fraudes ou atividades ilícitas.",
    ],
  },
  {
    title: "3. Compartilhamento de Informações",
    content: [
      "Não vendemos, alugamos ou comercializamos suas informações pessoais com terceiros.",
      "Podemos compartilhar suas informações com prestadores de serviços que atuam em nosso nome (como serviços de hospedagem e ferramentas de análise), sempre sob acordos de confidencialidade e conformidade com a LGPD.",
      "Podemos divulgar suas informações quando exigido por lei ou em resposta a solicitações válidas de autoridades públicas.",
    ],
  },
  {
    title: "4. Cookies e Tecnologias Similares",
    content: [
      "Utilizamos cookies para lembrar suas preferências, entender como você utiliza nosso site e melhorar sua experiência.",
      "Você pode controlar e gerenciar cookies através das configurações do seu navegador. A desativação de cookies pode afetar a funcionalidade de certos recursos do site.",
    ],
  },
  {
    title: "5. Google Ads e Análise de Dados",
    content: [
      "Utilizamos o Google Ads e ferramentas como Google Analytics para medir o desempenho de nossas campanhas publicitárias e entender como os visitantes chegam ao nosso site.",
      "O Google pode usar cookies para veicular anúncios com base em visitas anteriores ao nosso site ou a outros sites, conforme as configurações de anúncios do Google.",
      "Você pode desativar a personalização de anúncios do Google acessando as Configurações de Anúncios do Google em adssettings.google.com.",
    ],
  },
  {
    title: "6. Proteção de Dados",
    content: [
      "Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida.",
      "Apesar dos nossos esforços, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro. Não podemos garantir segurança absoluta.",
    ],
  },
  {
    title: "7. Seus Direitos (LGPD)",
    content: [
      "De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais.",
      "Você também pode solicitar a portabilidade de seus dados ou retirar seu consentimento a qualquer momento.",
      "Para exercer qualquer um desses direitos, entre em contato conosco através do WhatsApp ou pelos canais listados nesta página.",
    ],
  },
  {
    title: "8. Retenção de Dados",
    content: [
      "Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os fins descritos nesta política, salvo quando a retenção for exigida por lei.",
    ],
  },
  {
    title: "9. Links para Sites de Terceiros",
    content: [
      "Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de qualquer site que visitar.",
    ],
  },
  {
    title: "10. Alterações nesta Política",
    content: [
      "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações significativas publicando a nova política nesta página com uma data de revisão atualizada.",
    ],
  },
  {
    title: "11. Contato",
    content: [
      "Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:",
      "WhatsApp: (11) 96745-0723",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
              <HelpCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Central de Ajuda
            </span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-1.5 text-sm font-medium text-red-600 shadow-sm">
            <Shield className="h-4 w-4" />
            Documento legal
          </div>
          <h1 className="mb-3 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Política de <span className="text-red-600">Privacidade</span>
          </h1>
          <p className="text-gray-500">
            Última atualização: 2 de outubro de 2026
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 rounded-2xl border border-red-100 bg-red-50 p-6">
          <p className="text-sm leading-relaxed text-gray-700">
            Esta Política de Privacidade descreve como coletamos, utilizamos e
            protegemos suas informações pessoais quando você visita nosso site
            ou utiliza nossos serviços. Ao utilizar nosso site, você concorda
            com as práticas descritas nesta política.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-3 text-xl font-bold text-gray-900">
                {section.title}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="mb-3 leading-relaxed text-gray-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-red-600 p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-white">
            Tem dúvidas sobre seus dados?
          </h3>
          <p className="mb-6 text-red-100">
            Fale com nossa equipe pelo WhatsApp e tire suas questões.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-red-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            Falar Conosco
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600">
                <HelpCircle className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-gray-800">
                Central de Ajuda
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="text-gray-500 transition-colors hover:text-red-600"
              >
                Início
              </a>
              <a
                href="/privacidade"
                className="text-gray-500 transition-colors hover:text-red-600"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-400 sm:text-left">
            © 2026 Central de Ajuda. Suporte disponível via WhatsApp.
          </p>
        </div>
      </footer>

      {/* Botão flutuante de WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all hover:scale-110 hover:bg-red-700 hover:shadow-xl"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-30" />
      </a>
    </div>
  );
}

export default PrivacyPolicy;
