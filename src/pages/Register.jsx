import { useState } from "react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  pt: {
    title: "Crie sua conta",
    name: "Nome completo",
    email: "E-mail",
    password: "Senha",
    placeholderName: "Digite seu nome completo",
    placeholderEmail: "Digite seu e-mail",
    placeholderPassword: "Crie uma senha",
    submit: "Criar conta",
  },
  en: {
    title: "Create your account",
    name: "Full name",
    email: "E-mail",
    password: "Password",
    placeholderName: "Type your full name",
    placeholderEmail: "Type your email",
    placeholderPassword: "Create a password",
    submit: "Sign up",
  },
};
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const { language } = useLanguage();
  const t = translations[language];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode integrar sua API
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white mt-12">
      <div
        className="w-full max-w-md mx-auto bg-white rounded-lg p-8 space-y-6"
        style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
      >
        <h1 className="text-3xl font-light text-center text-[#494949]">
          {t.title}
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="nome" className="text-gray-700 text-[15px] mb-1">
              {t.name}
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder={t.placeholderName}
              className="border border-gray-300 rounded-md px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#ff5722]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 text-[15px] mb-1">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.placeholderEmail}
              className="border border-gray-300 rounded-md px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#ff5722]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="senha" className="text-gray-700 text-[15px] mb-1">
              {t.password}
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder={t.placeholderPassword}
              className="border border-gray-300 rounded-md px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#ff5722]"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full text-white rounded-md py-3 text-[14px] font-semibold transition-smooth"
            style={{
              backgroundColor: "var(--abanic-orange)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--abanic-orange-dark)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--abanic-orange)")
            }
          >
            {t.submit}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
