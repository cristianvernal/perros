import React from "react";
import "../components/Inicio.css"
import { Link } from "react-router-dom";
import { Button,} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Count from "./Count";


const Background = () => {
  return (
    <div>
      <div className="App">
        <div class="hero">
        <div className="image-container">
          <Image className="ImagenPerro"
            src="https://content.nationalgeographic.com.es/medio/2023/10/25/doberman-1_f3e49bcc_231025192836_800x800.jpg"
            rounded
            style={{  }}
          />
        </div>
          <h2 className="Titulo" >Razas de Perros</h2>
          
          <div className="boton">
            <Link to="/Inicio">
              <Button variant="primary">Entrar</Button>
            </Link>
            {""}
          </div>
          <Count>
        
          </Count>
        </div>
      </div>
    </div>
  );
};

export default Background;
