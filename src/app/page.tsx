import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import ShopExOffer from "./components/ShopExOffer";
import BenefitsSection from "./components/BenefitsSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Other content */}
      </main>
      <TopBar />
      {/* Other components */}
      <ShopExOffer />
      <div>
      <h1>Welcome to Our E-commerce Site</h1>
      <BenefitsSection />
    </div>

    </>
  );
}
    