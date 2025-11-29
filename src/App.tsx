import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          paddingTop: '80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
}

export default App;
