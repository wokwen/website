import About from './components/about/About';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
