import Hero from '../components/Hero';
import Features from '../components/Features';
import Integrations from '../components/Integrations';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider-glow" />
      <Features />
      <div className="divider" />
      <Integrations />
      <div className="divider-glow" />
      <Contact />
    </>
  );
}
