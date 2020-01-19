import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleAuth from "./components/GoogleAuth.js";

//clientID 533151601890-v71cgu2p87f0cfosmutsuauqb48iq87i.apps.googleusercontent.com

function App() {
  return (
    <div className="App">
      <GoogleAuth />
    </div>
  );
}

export default App;
