import {Routes, Route} from 'react-router-dom';
import About from "./About";
import Work from "./Work";
import Contact from './Contact';
import HomeMenu from "./common/HomeMenu/HomeMenu";
import Footer from "./common/Footer";
import Success from './Success';
import './App.scss';

function App() {
  return (
    <div className="app">
        <HomeMenu />
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route exact path="/success" element={<Success/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
