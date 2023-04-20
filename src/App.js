import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainPanel from './pages/mainPanel';
import Navbar from './pages/navbar';
import Offer from './pages/offer';
import Contact from './pages/contact';
import Gallery from './pages/gallery';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<MainPanel/>}/>
        <Route exact path='/oferta' element={<Offer/>}/>
        <Route exact path='/kontakt' element={<Contact/>}/>
        <Route exact path='/galeria' element={<Gallery/>}/>
      </Routes>
    </>
  );
}

export default App;
