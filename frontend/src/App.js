import About from './components/about/About';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Home from './components/home/Home';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <About />
      <Projects />
    </div>
  );
}

export default App;
