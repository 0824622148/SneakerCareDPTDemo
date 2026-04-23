import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Specials from "@/components/Specials";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import Booking from "@/components/Booking";
import InstagramFeed from "@/components/InstagramFeed";
import VaultSection from "@/components/VaultSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <Specials />
        <Services />
        <BeforeAfter />
        <HowItWorks />
        <Booking />
        <InstagramFeed />
        <VaultSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
