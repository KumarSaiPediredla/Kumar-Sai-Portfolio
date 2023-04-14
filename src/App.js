import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Skills from './components/skills';
import Contacts from './components/contacts';
import Qualification from './components/qualification';
import Projects from './components/projects';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
