
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Intervetion from './component/Intervetion/Intervetion';
import About from './component/About/About';
import Region from './component/Region/Region';
import Know from './component/Know/Know';
import Map from './component/Map/Map';


function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Intervetion" element={<Intervetion/>}/>
      <Route path="/Know" element={<Know/>}/>
      <Route path="/Region" element={<Region/>}/>
      <Route path="/Map" element={<Map/>}/>
    </Routes>
  <Footer/>
   </Router>
  );
}

export default App;
