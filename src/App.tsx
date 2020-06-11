import React from "react";
import "./App.css";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Image
          src="img/img1.jpg"
          alt="Widoczek1"
        />       
      </div>
    </div>
  );
}

export default App;
