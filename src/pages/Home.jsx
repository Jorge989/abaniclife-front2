import HeroSection from "../components/HeroSection";
import CultureSection from "../components/CultureSection";
import NewsletterSection from "../components/NewsletterSection";
import MosaicoProdutos from "../components/MosaicoProdutos";
import BreadText from "../components/BreadText";
function Home() {
  return (
    <main>
      <HeroSection />
      <BreadText />
      <MosaicoProdutos />
      <CultureSection />
      <NewsletterSection />
    </main>
  );
}

export default Home;
