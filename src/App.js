import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron} from "react-bootstrap";
import NavBar from "./components/NavBar"
import Headers from "./components/Headers.js";
import Aboutme from "./components/Aboutme.js";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts.js";

function App(){
  return(
    <Jumbotron fluid className="p-0 bg-info">
        <NavBar />
      <div className="mx-auto " style={{ width: "60%"}}>
          <Headers />
          <Aboutme />
          <Projects />
          <Contacts />
        </div>

    </Jumbotron>
  )
}
export default App;
