import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import {Route, Link} from 'react-router-dom';
import Footer from './Footer/Footer';
import Main from './Flashcards/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/flashcards" component={Main} />
      <Footer />
    </div>
  );
}

export default App;
