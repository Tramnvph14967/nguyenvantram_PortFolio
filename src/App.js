import './App.css';
import Navbar from './components/Navbar';
import Index from './features/home';
import About from './features/about/about';
import Resume from './features/resume/Resume';
import Portfolio from './features/portfolio/Portfolio';
import Services from './features/services/Services';
import Contact from './features/contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Index />
      <main id="main">
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
