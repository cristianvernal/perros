import "./components/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import inicio from "./pages/Inicio";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Background from "./components/Background";

function App() {
  return (
    <div>
      <Background></Background>
    </div>
  );
}

export default App;
