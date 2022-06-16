//import logo from './logo.svg';
import './App.css';
// import Darkmode from './component/Darkmode';
// import Persion from './component/Persion';

// import Conditional_ternary from './component/Conditional_ternary';

// import Conditional from './component/Conditional';

import Mailbox from './component/Mailbox';

function App() {
  return (
    <div className="App">
      {/* <Persion></Persion> */}
       {/* <Darkmode/> */}
       {/* <Persion /> */}
       {/* {<Conditional_ternary/>} */}
        {/* {<Conditional></Conditional>} */}
       {<Mailbox></Mailbox>}




      {/* <header className="App-header" >
  
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
    </div>
  );
}

export default App;
