import { useParams, useNavigate } from "react-router-dom";
import { articles } from "../data/articles";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button"; // ajuste o caminho se necessário

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleIndex = articles.findIndex((a) => a.id === parseInt(id));
  const article = articles[articleIndex];

  useEffect(() => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const timeoutId = setTimeout(scrollToTop, 50);
    return () => clearTimeout(timeoutId);
  }, [id]);

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  const goToNext = () => {
    const nextIndex = (articleIndex + 1) % articles.length;
    navigate(`/blog/${articles[nextIndex].id}`);
  };

  const goToPrev = () => {
    const prevIndex = (articleIndex - 1 + articles.length) % articles.length;
    navigate(`/blog/${articles[prevIndex].id}`);
  };

  return (
    <div className="relative max-w-5xl mx-auto px-6 py-10 mt-28">
      {/* Imagem flutuante com animação */}
      <motion.img
        key={`img-${id}`} // 👈 força remontagem e reanimação
        src={article.image}
        alt={article.title}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 lg:w-5/12 float-left mr-6 mb-4 object-contain rounded-xl shadow-lg"
      />

      {/* Conteúdo animado */}
      <motion.div
        key={`content-${id}`} // 👈 idem aqui
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="text-justify text-gray-800 text-[18px] leading-[1.6]"
      >
        <p className="text-sm text-gray-500 mb-1">{article.category}</p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-space-grotesk-h1">
          {article.title}
        </h1>

        {article.content.split("\n").map((p, i) => {
          if (p.trim() === "") return null;

          return (
            <p key={i} className="text-gray-700 mb-5 text-justify">
              {p.trim()}
            </p>
          );
        })}
      </motion.div>

      {/* === SETAS DE NAVEGAÇÃO === */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrev}
        className="absolute left-[-70px] top-[180px] z-20 bg-black/10 hover:bg-black/20 text-gray-700 backdrop-blur-sm rounded-full w-12 h-12 transition-smooth"
        aria-label="Artigo anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-[-70px] top-[180px] z-20 bg-black/10 hover:bg-black/20 text-gray-700 backdrop-blur-sm rounded-full w-12 h-12 transition-smooth"
        aria-label="Próximo artigo"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicador de número de artigo */}
      <div className="absolute bottom-4 right-4 text-gray-600 text-sm opacity-70">
        {articleIndex + 1} / {articles.length}
      </div>
    </div>
  );
};

export default BlogPostPage;
