import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
