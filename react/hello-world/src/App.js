import logo from './logo.svg';
import './App.css';
//import Greet from "./components/Greet";
import { Greet, Greet2 } from "./components/Greet";
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Greet />
      <Greet2 />
      <Welcome />
    </div>
  );
}

export default App;
