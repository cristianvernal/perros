import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import inicio from "./pages/inicio";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div class="hero">
        <div class="hero__title">Razas de Perros</div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div className="boton">
          <Button variant="primary">Entrar</Button>{""}
        </div>
      </div>
    </div>
  );
}

export default App;
