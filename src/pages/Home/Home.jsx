import Link from "./components/Link";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Article from "./Article";
import First from "./First";
import HeroText from "./HeroText";
import Catigories from "./components/Catigories";
import Discount from "./components/Discount";
import ProductList from "../../components/ProductList/ProductList";

function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <First />
      <HeroText />
      <Catigories />
      <Discount />

      <ProductList />
      <Article />
      <Link />

      <Footer />
    </div>
  );
}
export default Home;
