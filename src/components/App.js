import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  
//   const App = () => {
  const [showPara, setShowPara] = useState(false);
    
  return (
    <div id="main">
      // Do not alter the main div
    
     <button id='click' onClick={() =>setShowPara(true)}>Show Para</button>
      {showPara && <p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
