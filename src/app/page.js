import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import NavBar from "@/components/NavBar";
import NavItems from "@/components/NavItems";

export default function Home() {
  return (
    <div>
      <NavBar />
      <NavItems />
      <MainContent />
      <Footer />
    </div>
  );
}
