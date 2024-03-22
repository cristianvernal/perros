import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Count from "./Count";

const Background = () => {
  return (
    <div>
      <div className="App">
        <div class="hero">
        <div className="image-container">
          <Image
            src="https://content.nationalgeographic.com.es/medio/2023/10/25/doberman-1_f3e49bcc_231025192836_800x800.jpg"
            rounded
            style={{ maxWidth: "300px", maxHeight: "300px", marginLeft: "620px", marginTop:"20px" }}
          />
        </div>
          <div class="hero__title">Razas de Perros</div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
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
