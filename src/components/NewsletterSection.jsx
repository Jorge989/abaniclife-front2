import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import FiqueLigado from "../assets/Fiqueligado.png";
import { motion } from "framer-motion";

// Variants reutilizáveis (mesmos usados no BrandAndFounders)
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section
      className="py-16"
      style={{ backgroundColor: "#A4B6C0" }}
      id="newsletter"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 📌 Image Side com animação */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center h-96 lg:h-[500px]"
              style={{ backgroundColor: "#A1B6C1" }}
            >
              <img
                src={FiqueLigado}
                alt="Imagem Newsletter"
                className="w-auto h-auto max-w-full max-h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce" />
          </motion.div>

          {/* 📌 Content Side animado */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-abanic-gray-dark mb-6">
                Fique por <span className="abanic-orange">dentro</span>
              </h2>
              <p className="text-gray-700 mb-4 text-justify text-[18px]">
                Assine a nossa newsletter e receba em primeira mão as
                atualizações sobre lançamentos, edições especiais e eventos da
                marca.
              </p>
            </div>

            {/* 📌 Card animado */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  {!isSubscribed ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Mail className="h-5 w-5 text-orange-500" />
                        <span className="font-semibold text-abanic-gray-dark">
                          Inscreva-se na nossa newsletter
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex flex-col gap-3 flex-1">
                          <Input
                            type="text"
                            placeholder="Seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="border-gray-300 focus:ring-2 focus:ring-orange-500"
                          />

                          <Input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-gray-300 focus:ring-2 focus:ring-orange-500"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading || !nome || !email}
                          className="text-white px-8 py-3 font-semibold transition-smooth hover-lift self-center"
                          style={{
                            height: "100%",
                            backgroundColor:
                              isLoading || !nome || !email
                                ? "#cccccc"
                                : "#fc622b",
                          }}
                        >
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Inscrevendo...</span>
                            </div>
                          ) : (
                            "Assinar"
                          )}
                        </Button>
                      </div>

                      <p className="text-gray-700 mb-4 text-justify text-[17px]">
                        Segurança de dados de acordo com a Política de
                        Privacidade. A assinatura poderá ser cancelada a
                        qualquer momento.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-4">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-abanic-gray-dark mb-2">
                        Inscrição realizada com sucesso!
                      </h3>
                      <p className="text-abanic-gray">
                        Obrigado por se inscrever. Você receberá nossas
                        novidades em breve.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* 📌 Social proof animado */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center space-x-4 text-sm text-abanic-gray"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
