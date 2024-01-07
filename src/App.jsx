import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './Navbar';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { Route, Routes } from "react-router-dom";

function App() {
return (
    <>
    <Navbar/>
    <div class="container">
        <Routes>
            <Route path ="/" element={<About/>} />
            <Route path ="/portfolio" element={<Portfolio/>} />
            <Route path ="/contact" element={<Contact/>} />
            <Route path ="/resume" element={<Resume/>} />
        </Routes>
    </div>
    </>
)    
}

export default App;