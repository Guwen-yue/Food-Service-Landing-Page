import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import PromoBanner from './components/PromoBanner';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <AppPreview />
        <PromoBanner />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
