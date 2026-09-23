import { Route, Routes } from "react-router-dom";
import AboutSection from "../components/home/AboutSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";
import GoalsSection from "../components/home/GoalsSection";
import HeroSection from "../components/home/HeroSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import Navbar from "../components/home/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <GoalsSection />
      <CTASection />
      <Footer />
    </>
  );

}
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}