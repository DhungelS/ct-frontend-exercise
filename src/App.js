import React, { useEffect } from "react";
import generateToken from "./services/intialize";
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  useEffect(() => {
    generateToken()
    .then(res => {
      localStorage.setItem('access_token', res.access_token)
    })
  }, []);

  return (
    <div className="App">
      <Nav/>
    </div>
  );
}

export default App;
