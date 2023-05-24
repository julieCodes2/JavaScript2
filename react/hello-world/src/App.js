import logo from './logo.svg';
import './App.css';
//import Greet from "./components/Greet";
import { Greet, Greet2, Greet3 } from "./components/Greet";
import { Welcome, Welcome2 } from "./components/welcome";
import Message from "./components/Message";
import Counter from './components/Counter';
import ClassClick from "./components/ClassClick";
import FunctionClick from './components/FunctionClick';
import Eventbind from "./components/Eventbind";

function App() {
  return (
    <div className="App">
      <Greet name="Julie" nickname="AlsoJulie"/>
      <Greet2 name= "Jim" nickname="Jimmy"/>
      <Welcome name= "Sisa" nickname= "Sissy"/>
      <Welcome2 name="Fernando" nickname="Ferdi"/>
      <Message />
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <Eventbind/>
    </div>
   
  );
}

export default App;
