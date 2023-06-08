import './App.css';
import { Component } from 'react';
// import Greet from './components/Greet';
// import Namaste from './components/Namaste';
// import Welcome from './components/Welcome';
// import Message  from './components/message';
// import Hello from './components/Hello';
// import Counter from './components/Counter';
// import FunctionClick from  './components/FunctionClick';
// import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

class App extends Component {
  render(){
    return (
      <div className="App">
      {/* <Greet name="Alpha" heroname="Superman"> <p>Mulla</p></Greet> */}
      {/* <Greet name="Beta" heroname="Batman"></Greet> */}
      {/* <Greet name="Gamma" heroname="Spiderman"></Greet> */}
      {/* <Welcome name="Gamma" heroname="Superman">
        <p>Hello moto</p>
      </Welcome> */}
      {/* <Welcome name="Samma" heroname="Batman"></Welcome>
      <Welcome name="Damma" heroname="Spiderman"></Welcome> */}
      {/* <Message></Message> */}
      {/* <Counter addValue="6"></Counter> */}
      {/* <FunctionClick/>
      <ClassClick></ClassClick> */}
      <EventBind></EventBind>
      </div>
    )
  }
}

export default App;
