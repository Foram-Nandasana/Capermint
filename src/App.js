
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Header from './components/Header';
import { Protected } from './components/Protected';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import Navbar from './components/Navbar';

function App() {

  return (

    <BrowserRouter>
     <Navbar>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        {/* <Route path="/" element = {<Home/>}/> */}
        <Route path="/About" element={<Protected Component={About} />} />
        <Route path="/Contact" element={<Protected Component={Contact} />} />
        <Route path="Login" element={<Login />} />
        <Route path="Logout" element={<Protected Component={Logout} />} />
      </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;