import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

const BlogPostPage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 mt-27">
      {/* Conteúdo fluido tipo float */}
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full md:w-1/2 lg:w-5/12 float-left md:mr-6 mb-4 md:mb-0 object-contain rounded-lg"
        />

        <p className="text-sm text-gray-500 mb-2">{article.category}</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        <div className="prose prose-orange max-w-none">
          {article.content
            .split("\n")
            .map((p, i) => (p.trim() !== "" ? <p key={i}>{p}</p> : null))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
