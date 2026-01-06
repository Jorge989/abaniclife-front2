import React, { useState, useEffect } from "react";
import { Search, User, ChevronDown, Menu, X, ShoppingBag } from "lucide-react";
import { Heart, Star, StarHalf, StarOff } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import LogoAbanic from "../assets/LogoAbanic.png";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  pt: {
    topBar: "Enviamos para todo o Brasil",
    userMenu: {
      login: "Entrar",
      register: "Registrar-se",
    },
    menu: [
      { name: "Home", href: "/" },
      {
        name: "Sobre",
        href: "#",
        submenu: [{ name: "Manifesto da Marca", href: "/about#marca" }],
      },
      {
        name: "Produtos",
        href: "#",
        submenu: [
          { name: "GEL RHODY CLEANSE", href: "/product#rhody" },
          { name: "SÉRUM RHODY CLAREDOR", href: "/product#serum" },
          { name: "RHODY SENSE FPS50", href: "/product#fps50" },
        ],
      },
      {
        name: "Explore",
        href: "#",
        submenu: [
          { name: "Saiba mais Sobre Ativos e Benefícios", href: "/explore" },
          { name: "A importância da proteção solar", href: "#importancia" },
          { name: "ABANIC e a Sustentabilidade", href: "#dicas" },
        ],
      },
      {
        name: "Suporte",
        href: "#",
        submenu: [
          { name: "FAQ", href: "/faq" },
          { name: "Política de Privacidade", href: "/privacy-policy" },
          { name: "Política de Cookies", href: "/cookie-policy" },
          { name: "Termos de Uso", href: "#tutorial" },
        ],
      },
    ],
  },
  en: {
    topBar: "We ship all over Brazil",
    userMenu: {
      login: "Login",
      register: "Sign up",
    },
    menu: [
      { name: "Home", href: "/" },
      {
        name: "About",
        href: "#",
        submenu: [{ name: "Brand Manifesto", href: "/about#marca" }],
      },
      {
        name: "Product",
        href: "#",
        submenu: [
          { name: "RHODY SENSE FPS50", href: "/product#hidratante" },
          { name: "Lip Balm", href: "/product#ativos" },
        ],
      },
      {
        name: "Explore",
        href: "#",
        submenu: [
          { name: "Actives and Benefits", href: "/explore" },
          { name: "The Importance of Sun Protection", href: "#importancia" },
          { name: "ABANIC and Sustainability", href: "#dicas" },
        ],
      },
      {
        name: "Support",
        href: "#",
        submenu: [
          { name: "FAQ", href: "/faq" },
          { name: "Privacy Policy", href: "/privacy-policy" },
          { name: "Cookie Policy", href: "/cookie-policy" },
          { name: "Terms of Use", href: "#tutorial" },
        ],
      },
    ],
  },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { language, changeLanguage } = useLanguage();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = translations[language].menu;

  const toggleMobileSubmenu = (index) => {
    if (mobileActiveSubmenu === index) {
      setMobileActiveSubmenu(null);
    } else {
      setMobileActiveSubmenu(index);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-smooth ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-abanic-gray-light"
      }`}
    >
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between py-4 mt-5">
          {/* Desktop Language Selector */}
          <div className="hidden lg:block absolute left-0">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="
        bg-transparent
        border border-gray-300
        rounded-md
        py-1 px-3
        text-sm
        text-abanic-gray
        cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
        transition-colors
        appearance-none
        pr-6
        min-w-[120px]
      "
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' stroke='%236B7280' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M6 9l6 6 6-6'></path></svg>")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1em",
              }}
              aria-label="Selecionar idioma"
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Logo centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="block">
              <img
                src={LogoAbanic}
                alt="Logo Abanic"
                className="h-15 w-auto max-w-full object-contain"
              />
            </a>
          </div>

          {/* Desktop Search and User Icons aligned to right */}

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-abanic-gray hover:text-abanic-gray-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center items-center space-x-16 pb-4 mt-5">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="relative group"
              onClick={() => {
                if (activeSubmenu === index) {
                  setActiveSubmenu(null);
                } else {
                  setActiveSubmenu(index);
                }
              }}
            >
              <a
                href={item.href}
                className="text-abanic-gray hover:text-abanic-gray-dark transition-smooth flex items-center"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                {item.name}
                {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
              </a>

              {item.submenu && activeSubmenu === index && (
                <div className="absolute top-full left-0 w-58 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-abanic-gray hover:bg-gray-50 hover:text-abanic-gray-dark transition-smooth"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200 shadow-md py-6">
            <ul className="flex flex-col space-y-4 px-4">
              {/* Idioma dentro do menu mobile */}
              <li className="mb-4">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="
            w-full
            bg-gray-100
            border border-gray-300
            rounded-md
            py-2 px-3
            text-sm
            text-gray-700
            cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
            transition-colors
            appearance-none
            pr-8
          "
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' stroke='%236B7280' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M6 9l6 6 6-6'></path></svg>")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1em",
                  }}
                  aria-label="Selecionar idioma"
                >
                  <option value="pt">Português</option>
                  <option value="en">English</option>
                </select>
              </li>

              {/* Menu itens */}
              {menuItems.map((item, index) => (
                <li key={item.name} className="border-b border-gray-200 pb-2">
                  {!item.submenu ? (
                    <a
                      href={item.href}
                      className="block py-2 text-gray-800 hover:text-abanic-orange transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="w-full flex justify-between items-center py-2 text-lg text-gray-800 hover:text-abanic-orange transition-colors focus:outline-none"
                        onClick={() => toggleMobileSubmenu(index)}
                        aria-expanded={mobileActiveSubmenu === index}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`ml-2 h-5 w-5 transform transition-transform ${
                            mobileActiveSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileActiveSubmenu === index && (
                        <ul className="mt-2 pl-4 border-l border-gray-300 space-y-1">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <a
                                href={subItem.href}
                                className="block py-1 text-gray-700 hover:text-abanic-orange transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
