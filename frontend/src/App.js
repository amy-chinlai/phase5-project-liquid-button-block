import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Blocks from "./components/Blocks"
import BlockForm from "./components/BlockForm"
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App container">
      <div className="row main-heading">
        <h1>Liquid Button Block Builder</h1>
      </div>
      <Router>
        <div className="row">
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/blocks" component={Blocks}/>
          <Route exact path="/blocks/new" component={BlockForm}/>
        </div>
      </Router>
    </div>
  ); 
}

export default App;
