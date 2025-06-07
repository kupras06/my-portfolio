import { useState, useEffect } from 'preact/hooks';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { usePortfolioData } from './usePortfolioData';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { data, error, refetch } = usePortfolioData();

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (error || !data) {
    return <ErrorMessage message={error || 'Failed to load portfolio data'} onRetry={refetch} />;
  }
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero data={data.personal} />
      <About data={data.about} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Contact data={data.personal} />
      <Footer />
    </div>
  );
}

export default App;
