import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPanel from './pages/mainPanel';
import Navbar from './pages/navbar';
import Offer from './pages/offer';
import Contact from './pages/contact';
import Gallery from './pages/gallery';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<MainPanel/>}/>
        <Route path='/oferta' element={<Offer/>}/>
        <Route path='/kontakt' element={<Contact/>}/>
        <Route path='/galeria' element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
