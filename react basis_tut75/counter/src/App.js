

import React from "react"; 
import { useState } from 'react'; 
import Navbar from "./components/navbar";


function App() {
  const [x, setx] = useState(1)
  return (
    <>
    <h1>
      {x}
    </h1>
    <button onClick={() => {
      setx(x+1)
    }
    }>
      Click
    </button>
    <Navbar/>
    
    </>
  );
}

export default App;
