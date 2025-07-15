import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import SnakeApp from './snake/SnakeApp';
import Projects from './pages/Projects';
import Home from './pages/Home';

import Moving from './Moving/Moving';
// import ToDo from './Todo/TodoLists';

// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snake" element={<SnakeApp />} />
       <Route path="/projects" element={<Projects />} />
<Route path='/moving' element={<Moving />} />
{/* <Route path='/todo' element={<ToDo/>} /> */}

        {/*  <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
