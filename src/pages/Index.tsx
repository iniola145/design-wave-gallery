
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import CV from '../components/CV';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />
      <Skills />
      <Projects />
      <CV />
      <Contact />
    </div>
  );
};

export default Index;
