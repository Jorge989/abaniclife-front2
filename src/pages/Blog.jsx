import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import { useEffect } from "react";

const BlogPostPage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  useEffect(() => {
    // Scroll para o topo após a renderização do conteúdo
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // Pequeno delay garante que imagens e layout estejam renderizados
    const timeoutId = setTimeout(scrollToTop, 50);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 mt-27">
      <div className="relative">
        {/* Imagem flutuante à esquerda */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full md:w-1/2 lg:w-5/12 float-left mr-6 mb-2 object-contain rounded-lg"
        />

        {/* Conteúdo que flui ao lado da imagem */}
        <div className="text-justify text-gray-800 text-[16px] leading-[1.5]">
          <p className="text-sm text-gray-500 mb-1">{article.category}</p>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {article.title}
          </h1>

          {article.content.split("\n").map((p, i) => {
            if (p.trim() === "") return null;

            const precisaIndent = p.startsWith("#indentar");
            const texto = precisaIndent ? p.replace("#indentar", "").trim() : p;

            return (
              <p key={i} className={`mb-2 ${precisaIndent ? "indent-10" : ""}`}>
                {texto}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
