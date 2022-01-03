import {Routes, Route} from 'react-router-dom';
import About from "./About";
import Work from "./Work";
import Contact from './Contact';
import NotFound from "./NotFound";
import HomeMenu from "./common/HomeMenu/HomeMenu";
import Footer from "./common/Footer";
import './App.scss';

function App() {
  return (
    <div className="app">
        <HomeMenu />
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
