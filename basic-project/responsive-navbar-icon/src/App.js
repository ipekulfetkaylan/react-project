import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';
import Sign from './components/Sign';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Sign' element={<Sign/>}></Route>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
