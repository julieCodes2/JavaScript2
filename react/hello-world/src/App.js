import logo from './logo.svg';
import './App.css';
//import Greet from "./components/Greet";
import { Greet, Greet2 } from "./components/Greet";
import { Welcome, Welcome2 } from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Greet />
      <Greet2 />
      <Welcome />
      <Welcome2 />
    </div>
  );
}

export default App;
