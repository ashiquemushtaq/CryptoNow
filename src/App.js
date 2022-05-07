import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Coin from './components/Coin'

function App() {
  return (
    <div className='wrapper'>
      <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/coin/:name" element={<Coin/>} />
      </Routes>      
    </Router>
    </div>
  );
}

export default App;
