import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import {Route, Link} from 'react-router-dom';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Footer />
    </div>
  );
}

export default App;
