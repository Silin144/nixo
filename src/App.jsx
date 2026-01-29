import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Plasma from './components/Plasma';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen text-text relative">
      {/* Global Plasma Background */}
      <div className="fixed inset-0 z-0">
        <Plasma 
          color="#C4287E"
          speed={1}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={true}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="divider-glow" />
          <Features />
          <div className="divider" />
          <Integrations />
          <div className="divider-glow" />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
