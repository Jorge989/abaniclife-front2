import { useState } from "react";
import FotoCreme from "../assets/produto.png";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // item 0 aberto por padrão

  const faqItems = [
    {
      question: "So, how exactly does this work?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis... (resposta do FAQ)",
    },
    {
      question: "What is the Hipcouch Interior Design Service?",
      answer:
        "This is a customized design service provided by Hipcouch where our experts help you design your home.",
    },
    {
      question: "What cities do you currently operate in?",
      answer: "We currently operate in Mumbai, Bangalore, and Delhi.",
    },
    {
      question: "Hipcouch Interior Design Service?",
      answer: "Yes, we offer full-service interior design solutions.",
    },
    {
      question: "What kind of interior designers do you have?",
      answer:
        "We have experienced and certified designers with various styles and specialties.",
    },
  ];

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 py-12 md:py-20 flex flex-col items-center mt-25">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-abanic-gray-dark mb-4 text-center">
        FAQ
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 mt-10">
        {/* FAQ Section */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border-b pb-4 transition duration-200 ${
                activeIndex === index ? "text-[#ff5722]" : "text-[#444]"
              }`}
            >
              <button
                className="cursor-pointer flex justify-between items-center w-full text-left font-medium"
                onClick={() => toggleIndex(index)}
              >
                {item.question}
                <span className="text-xl">
                  {activeIndex === index ? "▾" : "▸"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="text-sm text-[#555] mt-2 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={FotoCreme}
            alt="Decorative"
            className="rounded-xl w-full max-w-md object-cover shadow-md"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl mt-16">
        <h3 className="text-xl md:text-2xl text-center text-[#494949] mb-8">
          Ainda tem dúvidas? fale conosco!
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Seu nome"
            className="border-b border-gray-300 px-2 py-3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-300 px-2 py-3 focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Sua mensagem"
            className="md:col-span-2 border-b border-gray-300 px-2 py-3 focus:outline-none"
          ></textarea>

          <div className="md:col-span-2 flex justify-start">
            <button
              type="submit"
              className="bg-[#ff5722] hover:bg-[#e64a19] text-white text-sm font-medium rounded-md px-6 py-3 transition duration-300"
            >
              Enviar mensagem →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Faq;
