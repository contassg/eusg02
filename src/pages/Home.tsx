import { useState } from "react";
import { MessageCircle, HelpCircle, Phone, Mail, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "5511967450723";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const faqItems = [
  {
    question: "Como posso entrar em contato?",
    answer:
      "Você pode falar com nossa equipe de suporte diretamente pelo WhatsApp clicando em qualquer botão de atendimento desta página.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer:
      "Nosso atendimento via WhatsApp funciona de segunda a sexta, das 8h às 18h, e aos sábados das 9h às 13h.",
  },
  {
    question: "Quanto tempo leva para responder?",
    answer:
      "Nossa equipe responde em até 30 minutos durante o horário de atendimento. Fora do horário, responderemos assim que possível.",
  },
  {
    question: "O atendimento é gratuito?",
    answer:
      "Sim! Todo o suporte e atendimento que oferecemos via WhatsApp é totalmente gratuito.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-red-600"
      >
        <span className="pr-4 font-medium text-gray-800">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-red-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
              <HelpCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Central de Ajuda
            </span>
          </div>
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-1.5 text-sm font-medium text-red-600 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Online agora
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Precisa de ajuda? <br />
            <span className="text-red-600">Fale conosco</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-600">
            Nossa equipe de suporte está pronta para te atender pelo WhatsApp.
            Clique no botão abaixo e tire suas dúvidas agora mesmo.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:scale-105 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30"
          >
            <MessageCircle className="h-6 w-6" />
            Falar no WhatsApp
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Atendimento rápido e gratuito
          </p>
        </div>
      </section>

      {/* Cards de contato */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 transition-colors group-hover:bg-red-100">
              <MessageCircle className="h-7 w-7 text-red-600" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              WhatsApp
            </h3>
            <p className="text-sm text-gray-500">Chat direto com nosso time</p>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 transition-colors group-hover:bg-red-100">
              <Phone className="h-7 w-7 text-red-600" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Telefone
            </h3>
            <p className="text-sm text-gray-500">(11) 96745-0723</p>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 transition-colors group-hover:bg-red-100">
              <Mail className="h-7 w-7 text-red-600" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Suporte
            </h3>
            <p className="text-sm text-gray-500">Envie sua mensagem</p>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Perguntas frequentes
          </h2>
          <p className="text-gray-500">
            Não encontrou sua resposta? Fale com a gente no WhatsApp.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white px-6 shadow-sm">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white">
            Ainda com dúvidas?
          </h2>
          <p className="mb-8 text-lg text-red-100">
            Nossa equipe de suporte está pronta para ajudar você agora mesmo.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-red-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="h-6 w-6" />
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
              <span className="font-semibold text-gray-800">Central de Ajuda</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/privacidade"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/privacidade");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="text-gray-500 transition-colors hover:text-red-600"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-400 sm:text-left">
            © 2026 Central de Ajuda. Suporte disponível via WhatsApp - Atendimento gratuito.
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

export default Home;
