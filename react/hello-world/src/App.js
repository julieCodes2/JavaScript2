import logo from './logo.svg';
import './App.css';
//import Greet from "./components/Greet";
import { Greet, Greet2 } from "./components/Greet";
import { Welcome, Welcome2 } from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Julie" nickname="AlsoJulie"/>
      <Greet2 name= "Jim" nickname="Jimmy"/>
      <Welcome name= "Sisa" nickname= "Sissy"/>
      <Welcome2 name="Fernando" nickname="Ferdi"/>
    </div>
  );
}

export default App;
