import Hero from './components/Hero';
import CodeSection from './components/CodeSection';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <CodeSection />
      <TrustSection />
      <Footer />
    </div>
  );
}
