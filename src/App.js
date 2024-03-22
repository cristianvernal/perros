import "./components/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import inicio from "./pages/Inicio";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Background from "./components/Background";
import Count from "./components/Count";

function App() {
  return (
    <div>
      <Background/>
     
    </div>
  );
}

export default App;
