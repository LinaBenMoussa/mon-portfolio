import './App.css';
import About from './components/About';
import Accueil from './components/accueil';
import Projects from './components/Projects';
import { Skills } from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Certifications from './components/Certification';

function App() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-950 via-sky-900 to-cyan-950 overflow-hidden">

      <Navbar />
      <section id="home" className='mt-20 mb-12 ml-20 mr-20'><Accueil /></section>
      <section id="about" className='mb-16'><About /></section>
      <section id="certifications" className='mb-16'><Certifications /></section>
      <section id="skills" className='mb-16'><Skills /></section>
      <section id="projects" className='mb-12'><Projects /></section>
      <section id="contact" className='mb-16'><Contact /></section>
    </section>
  );
}

export default App;
