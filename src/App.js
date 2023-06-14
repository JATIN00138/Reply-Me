// import logo from './logo.svg';
import './App.css';
import FrndContainer from './components/frnd/frnd-container.js';
import { MessageIN, MessageINFO, MessageOUT } from './components/messages/messages';
import InputBox from "./components/InputBox.js"
import { useState, useEffect } from "react";

function App() {
  const text = "textarea"
  function Textarea(props) {
    const [state, setState] = useState([]);
    useEffect(() => {
      fetch("reply").then(
        res=>setState(res.data)
      )
    })
  } 
    return (

      <div className="App">
        <div class="side-panel">
          <div className='topbar'>
          </div>
          <div className='friend-list'>
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
            <FrndContainer />
          </div>
        </div>
        <div class="main-panel">
          <div className='topbar'>
          </div>

          <div className="messages">
            <MessageIN time="9:40pm" isFirst={true} />
            <MessageINFO text="1/2/3" />
            <MessageOUT reply="This is Reply!" />

            <MessageIN time="1:23pm" />
            <MessageINFO text="Other Date" />
            <MessageOUT isFirst={true} />
            <MessageOUT reply="printMessage" />
          </div>
          <div className='input-box' role="textbox" spellCheck="true"  >
            <InputBox printMessage={text} />
          </div>
        </div>
      </div>
    );
  }

export default App;
