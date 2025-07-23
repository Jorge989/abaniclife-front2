import HeroSection from "../components/HeroSection";
import CultureSection from "../components/CultureSection";
import NewsletterSection from "../components/NewsletterSection";
import MosaicoProdutos from "../components/MosaicoProdutos";
function Home() {
  return (
    <main>
      <HeroSection />
      <MosaicoProdutos />
      <CultureSection />
      <NewsletterSection />
    </main>
  );
}

export default Home;
