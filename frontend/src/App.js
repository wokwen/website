import About from './components/about/About';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
