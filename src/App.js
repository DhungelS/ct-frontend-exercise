import React, { useEffect } from "react";
import generateToken from "./services/intialize";

function App() {
  // const genToken = async () => {
  //   return await generateToken();
  // };

  useEffect(() => {
    generateToken()
    .then(res => {
      localStorage.setItem('access_token', res.access_token)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
